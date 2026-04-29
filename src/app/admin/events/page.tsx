'use client';

import { useState, useEffect, useRef } from 'react';
import { getConferences, createConference, updateConference, deleteConference } from '@/actions/conferences';
import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { 
  Plus, 
  ArrowLeft, 
  Edit3, 
  Calendar,
  Star,
  ArrowUpDown,
  MapPin,
  Presentation,
  Clock,
  LayoutGrid,
  Trash2,
  Image as ImageIcon,
  X,
  ChevronRight,
  ChevronLeft,
  Settings,
  Users,
  FileText,
  RefreshCw,
  FileDown
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';


export default function EventsManagement() {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const brochureInputRef = useRef<HTMLInputElement>(null);

  const [currentStep, setCurrentStep] = useState(1);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Logistics & Identity (Mostly Step 1 + some Step 3)
  const [title, setTitle] = useState('');
  const [shortTitle, setShortTitle] = useState('');
  const [theme, setTheme] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [submissionStartDate, setSubmissionStartDate] = useState('');
  const [abstractDeadline, setAbstractDeadline] = useState('');
  const [fullPaperDeadline, setFullPaperDeadline] = useState('');
  const [registrationDeadline, setRegistrationDeadline] = useState('');
  const [venue, setVenue] = useState('');
  const [country, setCountry] = useState('');
  const [modes, setModes] = useState<string[]>([]); // Physical, Virtual, Hybrid
  const [isActive, setIsActive] = useState(true);
  const [isFeatured, setIsFeatured] = useState(false);
  const [order, setOrder] = useState('0');

  // Content, People & Requirements (Mostly Step 2 + rest of Step 3)
  const [about, setAbout] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [brochureUrl, setBrochureUrl] = useState<string | null>(null);
  const [organizingCommittee, setOrganizingCommittee] = useState('');
  const [keynoteSpeakers, setKeynoteSpeakers] = useState('');
  const [editorialBoard, setEditorialBoard] = useState('');
  const [tracks, setTracks] = useState('');
  const [keywords, setKeywords] = useState('');
  const [submissionInstructions, setSubmissionInstructions] = useState('');
  const [paperCategories, setPaperCategories] = useState<string[]>([]); // Full Paper, Abstract
  const [peerReviewMethod, setPeerReviewMethod] = useState('');

  // UI Fields
  const [color, setColor] = useState('bg-blue-500');

  const [events, setEvents] = useState<any[]>([]);
  const [eventsLoading, setEventsLoading] = useState(true);

  const loadData = async () => {
    try {
      setEventsLoading(true);
      const data = await getConferences();
      setEvents(data);
    } catch (e) {
      console.error(e);
      toast({ variant: 'destructive', title: 'Failed to load events' });
    } finally {
      setEventsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, target: 'image' | 'brochure' = 'image') => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { 
        toast({ variant: "destructive", title: "File too large", description: "Max size is 2MB." });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        if (target === 'image') setImageUrl(reader.result as string);
        else setBrochureUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setCurrentStep(1);
    setTitle(''); setShortTitle(''); setTheme('');
    setStartDate(''); setEndDate(''); setVenue(''); setCountry('');
    setModes([]); setIsActive(true);
    setAbout(''); setWebsiteUrl(''); setContactEmail(''); setImageUrl(null);
    setOrganizingCommittee(''); setKeynoteSpeakers(''); setEditorialBoard('');
    setTracks(''); setBrochureUrl(null); setKeywords(''); setSubmissionInstructions('');
    setSubmissionStartDate(''); setAbstractDeadline(''); setFullPaperDeadline(''); setRegistrationDeadline('');
    setPaperCategories([]); setPeerReviewMethod('');
    setColor('bg-blue-500'); setOrder('0'); setIsFeatured(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (brochureInputRef.current) brochureInputRef.current.value = '';
  };

  const toggleMode = (mode: string) => {
    setModes(prev => prev.includes(mode) ? prev.filter(m => m !== mode) : [...prev, mode]);
  };

  const toggleCategory = (cat: string) => {
    setPaperCategories(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
  };

  const validateStepOne = () => {
    if (!title.trim() || !startDate || !venue.trim() || !country.trim()) {
      toast({
        variant: 'destructive',
        title: 'Complete logistics first',
        description: 'Title, start date, venue, and country are required before moving on.',
      });
      return false;
    }

    if (endDate && endDate < startDate) {
      toast({
        variant: 'destructive',
        title: 'Invalid event dates',
        description: 'End date cannot be earlier than the start date.',
      });
      return false;
    }

    return true;
  };

  const goToAcademicContent = (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();

    if (!validateStepOne()) {
      return;
    }

    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (currentStep !== 2) {
      return;
    }

    if (!validateStepOne()) {
      setCurrentStep(1);
      return;
    }

    const conferenceData = {
      title, shortTitle, theme, startDate, endDate, venue, country, modes, isActive,
      about, websiteUrl, contactEmail, imageUrl, organizingCommittee, keynoteSpeakers, editorialBoard,
      tracks, brochureUrl, keywords, submissionInstructions, submissionStartDate, abstractDeadline, 
      fullPaperDeadline, registrationDeadline, paperCategories, peerReviewMethod,
      color, order: parseInt(order) || 0, isFeatured,
      date: `${startDate}${endDate ? ` - ${endDate}` : ''}`,
      location: `${venue}, ${country}`,
      status: isActive ? 'Active' : 'Inactive'
    };

    try {
      if (editingId) {
        await updateConference(Number(editingId), conferenceData);
        toast({ title: "Update Success", description: `Conference "${title}" has been synchronized.` });
      } else {
        await createConference(conferenceData);
        toast({ title: "Event Cataloged", description: `New conference "${title}" is now active.` });
      }
      resetForm();
      loadData();
    } catch (err) {
      console.error(err);
      toast({ variant: 'destructive', title: "Error", description: "Failed to save conference." });
    }
  };

  const handleEdit = (event: any) => {
    setEditingId(event.id);
    setTitle(event.title || ''); setShortTitle(event.shortTitle || ''); setTheme(event.theme || '');
    setStartDate(event.startDate || ''); setEndDate(event.endDate || ''); setVenue(event.venue || ''); setCountry(event.country || '');
    setModes(event.modes || []); setIsActive(event.isActive !== undefined ? event.isActive : true);
    setAbout(event.about || ''); setWebsiteUrl(event.websiteUrl || ''); setContactEmail(event.contactEmail || ''); setImageUrl(event.imageUrl || null);
    setOrganizingCommittee(event.organizingCommittee || ''); setKeynoteSpeakers(event.keynoteSpeakers || ''); setEditorialBoard(event.editorialBoard || '');
    setTracks(event.tracks || ''); setBrochureUrl(event.brochureUrl || null); setKeywords(event.keywords || ''); setSubmissionInstructions(event.submissionInstructions || '');
    setSubmissionStartDate(event.submissionStartDate || ''); setAbstractDeadline(event.abstractDeadline || ''); setFullPaperDeadline(event.fullPaperDeadline || ''); setRegistrationDeadline(event.registrationDeadline || '');
    setPaperCategories(event.paperCategories || []); setPeerReviewMethod(event.peerReviewMethod || '');
    setColor(event.color || 'bg-blue-500'); setOrder(event.order?.toString() || '0'); setIsFeatured(event.isFeatured || false);
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string, title: string) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) return;
    try {
      await deleteConference(Number(id));
      toast({ title: "Record Deleted", description: `"${title}" has been removed.` });
      loadData();
    } catch (err) {
      toast({ variant: 'destructive', title: "Error", description: "Failed to delete conference." });
    }
  };



  return (
    <div className="flex flex-col min-h-screen bg-slate-50 overflow-x-hidden">
      <Header />
      <main className="flex-1 pt-24 md:pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 md:mb-12">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild className="rounded-full bg-white shadow-sm hover:bg-primary hover:text-white transition-colors">
                <Link href="/admin/dashboard"><ArrowLeft className="h-5 w-5" /></Link>
              </Button>
              <div>
                <h1 className="text-2xl md:text-3xl font-black text-primary font-headline italic">
                  Conference Manager
                </h1>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 ml-1">Event Registry & Cataloging</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Management Console (Multi-Step Form) */}
            <div className="lg:col-span-5" data-aos="fade-right">
              <Card className="rounded-2xl border-none shadow-2xl bg-white overflow-hidden lg:sticky lg:top-32 lg:max-h-[calc(100vh-9rem)] lg:overflow-y-auto">
                <div className="bg-primary p-6 text-white">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold font-headline italic flex items-center gap-2">
                      <Settings className="h-5 w-5 text-accent" />
                      {editingId ? 'Modify Record' : 'Add Conference'}
                    </h2>
                    {editingId && (
                      <Button type="button" variant="ghost" size="sm" onClick={resetForm} className="text-[10px] font-black uppercase text-accent hover:bg-white/10">
                        Cancel
                      </Button>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {[1, 2].map((s) => (
                      <div key={s} className="flex-1 flex flex-col gap-1.5">
                        <div className={`h-1 rounded-full transition-all ${currentStep >= s ? 'bg-accent' : 'bg-white/20'}`}></div>
                        <span className={`text-[8px] font-black uppercase tracking-widest ${currentStep === s ? 'text-accent' : 'text-white/40'}`}>
                          {s === 1 ? 'Logistics' : 'Academic Content'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <form 
                  onSubmit={handleSubmit} 
                  className="p-6 md:p-8 space-y-6"
                >
                  
                  {/* STEP 1: IDENTITY, DATES & LOGISTICS */}
                  {currentStep === 1 && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                      <div className="space-y-1.5">
                        <label className="text-[9px] font-black uppercase text-primary/40 tracking-widest ml-1">Conference Title *</label>
                        <Input value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="Full name of event" className="rounded-xl h-11" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[9px] font-black uppercase text-primary/40 tracking-widest ml-1">Acronym / Short Title</label>
                          <Input value={shortTitle} onChange={(e) => setShortTitle(e.target.value)} placeholder="e.g. ICML 2025" className="rounded-xl h-11" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[9px] font-black uppercase text-primary/40 tracking-widest ml-1">Tagline</label>
                          <Input value={theme} onChange={(e) => setTheme(e.target.value)} placeholder="Optional theme" className="rounded-xl h-11" />
                        </div>
                      </div>

                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-4">
                        <p className="text-[8px] font-black uppercase tracking-widest text-primary/30 text-center">Event Schedule</p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[9px] font-black uppercase text-primary/40 tracking-widest ml-1">Start Date *</label>
                            <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required className="rounded-xl h-11" />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[9px] font-black uppercase text-primary/40 tracking-widest ml-1">End Date</label>
                            <Input type="date" value={endDate} min={startDate || undefined} onChange={(e) => setEndDate(e.target.value)} className="rounded-xl h-11" />
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-blue-50/30 rounded-xl border border-blue-100 space-y-4">
                        <p className="text-[8px] font-black uppercase tracking-widest text-blue-900/30 text-center">Submission Deadlines</p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[9px] font-black uppercase text-primary/40 tracking-widest ml-1">Submissions Open</label>
                            <Input type="date" value={submissionStartDate} onChange={(e) => setSubmissionStartDate(e.target.value)} className="rounded-xl h-11" />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[9px] font-black uppercase text-primary/40 tracking-widest ml-1">Abstract Deadline</label>
                            <Input type="date" value={abstractDeadline} min={submissionStartDate || undefined} onChange={(e) => setAbstractDeadline(e.target.value)} className="rounded-xl h-11" />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[9px] font-black uppercase text-primary/40 tracking-widest ml-1">Full Paper Deadline</label>
                            <Input type="date" value={fullPaperDeadline} min={abstractDeadline || submissionStartDate || undefined} onChange={(e) => setFullPaperDeadline(e.target.value)} className="rounded-xl h-11" />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[9px] font-black uppercase text-primary/40 tracking-widest ml-1">Reg. Deadline</label>
                            <Input type="date" value={registrationDeadline} min={fullPaperDeadline || abstractDeadline || submissionStartDate || undefined} onChange={(e) => setRegistrationDeadline(e.target.value)} className="rounded-xl h-11" />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[9px] font-black uppercase text-primary/40 tracking-widest ml-1">Venue *</label>
                          <Input value={venue} onChange={(e) => setVenue(e.target.value)} required placeholder="e.g. Grand Hall" className="rounded-xl h-11" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[9px] font-black uppercase text-primary/40 tracking-widest ml-1">Country *</label>
                          <Input value={country} onChange={(e) => setCountry(e.target.value)} required placeholder="e.g. India" className="rounded-xl h-11" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase text-primary/40 tracking-widest ml-1">Mode of Conference</label>
                        <div className="flex flex-wrap gap-4 px-4 py-3 bg-slate-50 rounded-xl border border-slate-100">
                          {['Physical', 'Virtual', 'Hybrid'].map(m => (
                            <div key={m} className="flex items-center space-x-2">
                              <Checkbox id={`mode-${m}`} checked={modes.includes(m)} onCheckedChange={() => toggleMode(m)} />
                              <label htmlFor={`mode-${m}`} className="text-[10px] font-bold text-primary/70">{m}</label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center justify-between px-4 py-3 bg-slate-50 rounded-xl border border-slate-100">
                          <span className="text-[10px] font-black text-primary/60 uppercase tracking-widest">Active</span>
                          <Switch checked={isActive} onCheckedChange={setIsActive} />
                        </div>
                        <div className="flex items-center justify-between px-4 py-3 bg-slate-50 rounded-xl border border-slate-100">
                          <div className="flex items-center gap-2">
                            <Checkbox id="isFeatured" checked={isFeatured} onCheckedChange={(c) => setIsFeatured(c as boolean)} />
                            <label htmlFor="isFeatured" className="text-[10px] font-black text-primary/60 uppercase tracking-widest">Featured</label>
                          </div>
                          <Input type="number" value={order} onChange={(e) => setOrder(e.target.value)} className="w-14 h-8 text-[10px] text-center" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: CONTENT, PEOPLE & ACADEMIC DOCUMENTS */}
                  {currentStep === 2 && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                      <div className="space-y-1.5">
                        <label className="text-[9px] font-black uppercase text-primary/40 tracking-widest ml-1">About Conference</label>
                        <Textarea value={about} onChange={(e) => setAbout(e.target.value)} placeholder="Detailed description..." className="rounded-xl min-h-[100px]" />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[9px] font-black uppercase text-primary/40 tracking-widest ml-1">Official Website</label>
                          <Input type="url" value={websiteUrl} onChange={(e) => setWebsiteUrl(e.target.value)} placeholder="https://..." className="rounded-xl h-11" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[9px] font-black uppercase text-primary/40 tracking-widest ml-1">Contact Email</label>
                          <Input type="email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} placeholder="info@conf.org" className="rounded-xl h-11" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[9px] font-black uppercase text-primary/40 tracking-widest ml-1">Banner (Max 2MB)</label>
                          <div 
                            onClick={() => fileInputRef.current?.click()}
                            className="w-full aspect-video border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-slate-50 transition-all relative overflow-hidden"
                          >
                            {imageUrl ? (
                              <Image src={imageUrl} alt="Banner" fill className="object-cover" />
                            ) : (
                              <>
                                <ImageIcon className="h-6 w-6 text-primary/10" />
                                <span className="text-[7px] font-black text-primary/30 uppercase">Select Image</span>
                              </>
                            )}
                          </div>
                          <input type="file" ref={fileInputRef} onChange={(e) => handleFileChange(e, 'image')} accept="image/*" className="hidden" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[9px] font-black uppercase text-primary/40 tracking-widest ml-1">Brochure/Template</label>
                          <div 
                            onClick={() => brochureInputRef.current?.click()}
                            className="w-full aspect-video border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-slate-50 transition-all relative overflow-hidden"
                          >
                            {brochureUrl ? (
                              <div className="flex flex-col items-center gap-1">
                                <FileDown className="h-6 w-6 text-green-500" />
                                <span className="text-[7px] font-black text-green-600 uppercase">File Attached</span>
                              </div>
                            ) : (
                              <>
                                <FileText className="h-6 w-6 text-primary/10" />
                                <span className="text-[7px] font-black text-primary/30 uppercase">Upload PDF/Doc</span>
                              </>
                            )}
                          </div>
                          <input type="file" ref={brochureInputRef} onChange={(e) => handleFileChange(e, 'brochure')} accept=".pdf,.doc,.docx" className="hidden" />
                        </div>
                      </div>

                      <div className="space-y-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <p className="text-[8px] font-black uppercase tracking-widest text-primary/30 text-center">Board & Committees</p>
                        <Textarea value={organizingCommittee} onChange={(e) => setOrganizingCommittee(e.target.value)} placeholder="Organizing Committee..." className="rounded-xl h-16 text-xs" />
                        <Textarea value={keynoteSpeakers} onChange={(e) => setKeynoteSpeakers(e.target.value)} placeholder="Keynote Speakers..." className="rounded-xl h-16 text-xs" />
                        <Textarea value={editorialBoard} onChange={(e) => setEditorialBoard(e.target.value)} placeholder="Editorial Board..." className="rounded-xl h-16 text-xs" />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[9px] font-black uppercase text-primary/40 tracking-widest ml-1">Tracks & Themes</label>
                        <Textarea value={tracks} onChange={(e) => setTracks(e.target.value)} placeholder="Research domains..." className="rounded-xl h-20 text-xs" />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[9px] font-black uppercase text-primary/40 tracking-widest ml-1">Keywords / SDG Tags</label>
                          <Input value={keywords} onChange={(e) => setKeywords(e.target.value)} placeholder="AI, Sustainable..." className="rounded-xl h-11 text-xs" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[9px] font-black uppercase text-primary/40 tracking-widest ml-1">Review Method</label>
                          <Input value={peerReviewMethod} onChange={(e) => setPeerReviewMethod(e.target.value)} placeholder="e.g. Double-Blind" className="rounded-xl h-11 text-xs" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase text-primary/40 tracking-widest ml-1">Paper Categories</label>
                        <div className="flex flex-wrap gap-2 px-4 py-3 bg-slate-50 rounded-xl border border-slate-100">
                          {['Full Paper', 'Abstract', 'Poster', 'Workshop'].map(c => (
                            <div key={c} className="flex items-center space-x-2">
                              <Checkbox id={`cat-${c}`} checked={paperCategories.includes(c)} onCheckedChange={() => toggleCategory(c)} />
                              <label htmlFor={`cat-${c}`} className="text-[10px] font-bold text-primary/70">{c}</label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-3 pt-4 border-t border-slate-50">
                    {currentStep > 1 && (
                      <Button type="button" variant="outline" onClick={() => setCurrentStep(prev => prev - 1)} className="flex-1 rounded-xl h-12 text-[10px] font-black uppercase tracking-widest">
                        <ChevronLeft className="mr-2 h-4 w-4" /> Logistics
                      </Button>
                    )}
                    {currentStep < 2 ? (
                      <Button type="button" onClick={goToAcademicContent} className="flex-1 bg-primary text-accent rounded-xl h-12 text-[10px] font-black uppercase tracking-widest">
                        Content & Deadlines <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button type="submit" className="flex-1 bg-accent text-primary rounded-xl h-12 text-[10px] font-black uppercase tracking-widest shadow-xl">
                        {editingId ? <><Edit3 className="mr-2 h-4 w-4" /> Update Record</> : <><Plus className="mr-2 h-4 w-4" /> Save Conference</>}
                      </Button>
                    )}
                  </div>
                </form>
              </Card>
            </div>

            {/* Live Registry (List) */}
            <div className="lg:col-span-7 space-y-6" data-aos="fade-left">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-4">
                <h2 className="text-lg font-bold text-primary font-headline italic flex items-center gap-2">
                  <LayoutGrid className="h-5 w-5 text-accent" />
                  Live Registry {events && <span className="text-xs font-black bg-primary/5 px-2 py-0.5 rounded-full text-primary/40 ml-1">({events.length})</span>}
                </h2>
              </div>
              
              {eventsLoading ? (
                <div className="p-32 text-center flex flex-col items-center gap-4">
                  <RefreshCw className="h-8 w-8 text-accent animate-spin" />
                  <p className="text-[10px] font-black text-primary/20 uppercase tracking-[0.3em]">Updating registry...</p>
                </div>
              ) : (events && events.length > 0) ? (
                <div className="grid grid-cols-1 gap-6">
                  {events.map((event: any) => (
                    <Card key={event.id} className="rounded-2xl shadow-lg border-none overflow-hidden group bg-white hover:shadow-2xl transition-all duration-500">
                      <div className="flex flex-col sm:flex-row h-full">
                        <div className="w-full sm:w-48 aspect-video sm:aspect-auto relative bg-slate-100 shrink-0">
                          {event.imageUrl ? (
                            <Image src={event.imageUrl} alt={event.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center opacity-10"><Presentation className="h-10 w-10" /></div>
                          )}
                          {event.isFeatured && (
                            <div className="absolute top-2 left-2 bg-accent text-primary text-[7px] font-black uppercase px-1.5 py-0.5 rounded-full shadow-lg flex items-center gap-1">
                              <Star className="h-2 w-2 fill-current" /> Featured
                            </div>
                          )}
                        </div>
                        <div className="p-6 flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start mb-2">
                              <div className="flex items-center gap-2">
                                <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded-full ${event.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                  {event.isActive ? 'Active' : 'Inactive'}
                                </span>
                                <span className="text-[8px] font-black text-primary/30 uppercase tracking-widest">ID: {String(event.id).slice(0, 8)}</span>
                              </div>
                              <div className="flex gap-1.5">
                                <Button size="icon" variant="ghost" onClick={() => handleEdit(event)} className="h-8 w-8 rounded-lg bg-slate-50 text-primary hover:bg-primary hover:text-white transition-all">
                                  <Edit3 className="h-3.5 w-3.5" />
                                </Button>
                                <Button size="icon" variant="ghost" onClick={() => handleDelete(event.id, event.title)} className="h-8 w-8 rounded-lg bg-slate-50 text-red-500 hover:bg-red-500 hover:text-white transition-all">
                                  <Trash2 className="h-3.5 w-3.5" />
                                </Button>
                              </div>
                            </div>
                            <h3 className="text-lg font-bold text-primary font-headline italic leading-tight group-hover:text-accent transition-colors mb-2">
                              {event.title} {event.shortTitle && `(${event.shortTitle})`}
                            </h3>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div className="flex items-center gap-2 text-[10px] font-bold text-primary/60">
                                <Calendar className="h-3.5 w-3.5 text-accent" /> {event.startDate}
                              </div>
                              <div className="flex items-center gap-2 text-[10px] font-bold text-primary/60">
                                <MapPin className="h-3.5 w-3.5 text-accent" /> {event.venue}, {event.country}
                              </div>
                            </div>
                          </div>
                          <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                            <div className="flex gap-2">
                              {event.modes?.map((m: string) => (
                                <span key={m} className="text-[7px] font-bold uppercase tracking-widest text-primary/40 bg-slate-50 px-1.5 py-0.5 rounded-full">{m}</span>
                              ))}
                            </div>
                            <div className="text-[9px] font-black text-accent uppercase tracking-tighter italic">Order: {event.order}</div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-2xl border-2 border-dashed border-primary/5 p-24 text-center flex flex-col items-center gap-6">
                  <Presentation className="h-12 w-12 text-primary/5" />
                  <p className="text-xs font-bold text-primary/40 uppercase tracking-widest">No Conferences Registry Found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
