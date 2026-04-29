'use client';

import { useEffect, useMemo, useState } from 'react';
import { getInquiries, updateInquiryStatus, deleteInquiry } from '@/actions/inquiries';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Mail,
  ArrowLeft,
  Trash2,
  CheckCircle2,
  Clock,
  Building2,
  Phone,
  MessageSquare,
  Tag,
  Search,
  Filter,
  GraduationCap,
  FileText,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ITEMS_PER_PAGE_OPTIONS = ['5', '10', '20', '50'] as const;

export default function InquiriesManagement() {
  const { toast } = useToast();

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [purposeFilter, setPurposeFilter] = useState('all');
  const [itemsPerPage, setItemsPerPage] = useState<(typeof ITEMS_PER_PAGE_OPTIONS)[number]>('10');
  const [currentPage, setCurrentPage] = useState(1);

  const [inquiries, setInquiries] = useState<any[]>([]);
  const [inquiriesLoading, setInquiriesLoading] = useState(true);

  const loadData = async () => {
    try {
      setInquiriesLoading(true);
      const data = await getInquiries();
      setInquiries(data);
    } catch (e) {
      console.error(e);
      toast({ variant: 'destructive', title: 'Failed to load inquiries' });
    } finally {
      setInquiriesLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter, purposeFilter, itemsPerPage]);

  const purposeOptions = useMemo(() => {
    const values = new Set<string>();

    inquiries.forEach((inquiry: any) => {
      if (inquiry.purpose) {
        values.add(inquiry.purpose);
      }
    });

    return ['all', ...Array.from(values)];
  }, [inquiries]);

  const filteredInquiries = useMemo(() => {
    if (!inquiries) return [];

    return inquiries.filter((inquiry: any) => {
      const normalizedSearch = searchTerm.toLowerCase();
      const matchesSearch =
        (inquiry.name || '').toLowerCase().includes(normalizedSearch) ||
        (inquiry.email || '').toLowerCase().includes(normalizedSearch) ||
        (inquiry.institution || '').toLowerCase().includes(normalizedSearch) ||
        (inquiry.purpose || '').toLowerCase().includes(normalizedSearch);

      const matchesStatus = statusFilter === 'all' || inquiry.status === statusFilter;
      const matchesPurpose = purposeFilter === 'all' || inquiry.purpose === purposeFilter;

      return matchesSearch && matchesStatus && matchesPurpose;
    });
  }, [inquiries, searchTerm, statusFilter, purposeFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredInquiries.length / Number(itemsPerPage)));

  const paginatedInquiries = useMemo(() => {
    const start = (currentPage - 1) * Number(itemsPerPage);
    return filteredInquiries.slice(start, start + Number(itemsPerPage));
  }, [filteredInquiries, currentPage, itemsPerPage]);

  const handleDelete = async (id: string, name: string) => {
    if (!window.confirm(`Delete inquiry from ${name}?`)) return;

    try {
      await deleteInquiry(Number(id));
      toast({ title: 'Inquiry Deleted' });
      loadData();
    } catch (_err) {
      toast({ variant: 'destructive', title: 'Error deleting inquiry' });
    }
  };

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    try {
      await updateInquiryStatus(Number(id), newStatus);
      toast({ title: 'Status Updated' });
      loadData();
    } catch (_err) {
      toast({ variant: 'destructive', title: 'Error updating status' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      <Header />
      <main className="flex-1 pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex items-center gap-4 mb-8">
            <Button variant="ghost" size="icon" asChild className="rounded-full bg-white shadow-sm hover:bg-primary hover:text-white transition-colors">
              <Link href="/admin/dashboard"><ArrowLeft className="h-5 w-5" /></Link>
            </Button>
            <div>
              <h1 className="text-3xl font-black text-primary font-headline italic">
                Inquiries & Applications
              </h1>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 ml-1">Portal Submissions Registry</p>
            </div>
          </div>

          <Card className="rounded-2xl border-none shadow-xl bg-white mb-8 overflow-hidden">
            <CardHeader className="bg-white/50 border-b border-slate-50 px-6 py-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
                  <div className="flex flex-1 flex-col lg:flex-row items-stretch lg:items-center gap-4 w-full">
                    <div className="relative flex-1 max-w-sm">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/30" />
                      <Input
                        placeholder="Search submissions..."
                        className="pl-10 h-10 rounded-xl"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>

                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-full lg:w-[160px] h-10 rounded-xl">
                        <Filter className="mr-2 h-4 w-4 text-primary/30" />
                        <SelectValue placeholder="All Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="reviewed">Reviewed</SelectItem>
                        <SelectItem value="contacted">Contacted</SelectItem>
                        <SelectItem value="archived">Archived</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={purposeFilter} onValueChange={setPurposeFilter}>
                      <SelectTrigger className="w-full lg:w-[220px] h-10 rounded-xl">
                        <Tag className="mr-2 h-4 w-4 text-primary/30" />
                        <SelectValue placeholder="All Purposes" />
                      </SelectTrigger>
                      <SelectContent>
                        {purposeOptions.map((purpose) => (
                          <SelectItem key={purpose} value={purpose}>
                            {purpose === 'all' ? 'All Purposes' : purpose}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="text-[10px] font-black uppercase text-primary/30 tracking-widest">
                    Showing {filteredInquiries.length} submissions
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="text-[10px] font-black uppercase text-primary/30 tracking-widest">
                    Page {currentPage} of {totalPages}
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black uppercase text-primary/30 tracking-widest">Rows</span>
                    <Select value={itemsPerPage} onValueChange={(value: (typeof ITEMS_PER_PAGE_OPTIONS)[number]) => setItemsPerPage(value)}>
                      <SelectTrigger className="w-[88px] h-10 rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {ITEMS_PER_PAGE_OPTIONS.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              {inquiriesLoading ? (
                <div className="p-24 text-center">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-accent mx-auto"></div>
                </div>
              ) : paginatedInquiries.length > 0 ? (
                <div className="divide-y divide-slate-50">
                  {paginatedInquiries.map((inquiry: any) => (
                    <div key={inquiry.id} className="p-6 md:p-8 hover:bg-slate-50/50 transition-colors">
                      <div className="flex flex-col lg:flex-row gap-8">
                        <div className="flex-1 space-y-6">
                          <div className="flex flex-wrap items-start justify-between gap-4">
                            <div className="space-y-1">
                              <div className="flex items-center gap-3">
                                <h3 className="text-lg font-bold text-primary italic">{inquiry.name}</h3>
                                <div className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${
                                  inquiry.purpose?.includes('Membership') ? 'bg-amber-100 text-amber-700' :
                                  inquiry.purpose?.includes('Paper') ? 'bg-blue-100 text-blue-700' :
                                  'bg-slate-100 text-slate-700'
                                }`}>
                                  {inquiry.purpose}
                                </div>
                                <div className={`px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest border ${
                                  inquiry.status === 'pending' ? 'border-red-200 text-red-600 bg-red-50' :
                                  inquiry.status === 'reviewed' ? 'border-blue-200 text-blue-600 bg-blue-50' :
                                  inquiry.status === 'contacted' ? 'border-green-200 text-green-600 bg-green-50' :
                                  'border-slate-200 text-slate-600 bg-slate-50'
                                }`}>
                                  {inquiry.status}
                                </div>
                              </div>

                              <div className="flex flex-wrap items-center gap-4 text-[10px] font-bold text-primary/40 uppercase tracking-tighter">
                                <span className="flex items-center gap-1.5"><Mail className="h-3 w-3" /> {inquiry.email}</span>
                                {inquiry.phone && (
                                  <span className="flex items-center gap-1.5"><Phone className="h-3 w-3" /> {inquiry.phone}</span>
                                )}
                              </div>
                            </div>

                            <div className="flex items-center gap-2 text-[10px] font-black text-primary/20 uppercase tracking-[0.2em]">
                              <Clock className="h-3 w-3" />
                              {inquiry.createdAt ? new Date(inquiry.createdAt).toLocaleString() : 'Just now'}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {inquiry.tier && (
                              <div className="space-y-2">
                                <p className="text-[10px] font-black uppercase text-primary/30 tracking-widest flex items-center gap-2">
                                  <GraduationCap className="h-3 w-3" /> Applied Tier
                                </p>
                                <div className="p-3 rounded-xl bg-amber-50/50 border border-amber-100 text-sm font-bold text-amber-900 italic">
                                  {inquiry.tier}
                                </div>
                              </div>
                            )}

                            {inquiry.institution && (
                              <div className="space-y-2">
                                <p className="text-[10px] font-black uppercase text-primary/30 tracking-widest flex items-center gap-2">
                                  <Building2 className="h-3 w-3" /> Institution
                                </p>
                                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-sm font-bold text-primary/70">
                                  {inquiry.institution}
                                </div>
                              </div>
                            )}
                          </div>

                          {inquiry.aboutDetails && (
                            <div className="space-y-2">
                              <p className="text-[10px] font-black uppercase text-primary/30 tracking-widest flex items-center gap-2">
                                <FileText className="h-3 w-3" /> Research / Conference Details
                              </p>
                              <div className="p-4 rounded-xl bg-blue-50/30 border border-blue-100 text-sm font-medium text-blue-900 leading-relaxed italic">
                                {inquiry.aboutDetails}
                              </div>
                            </div>
                          )}

                          <div className="space-y-2">
                            <p className="text-[10px] font-black uppercase text-primary/30 tracking-widest flex items-center gap-2">
                              <MessageSquare className="h-3 w-3" /> Message / Statement
                            </p>
                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-sm italic text-foreground/70 leading-relaxed whitespace-pre-wrap">
                              "{inquiry.message || 'No additional message.'}"
                            </div>
                          </div>
                        </div>

                        <div className="lg:w-48 flex flex-col gap-2 pt-2 lg:border-l lg:border-slate-50 lg:pl-8">
                          <p className="text-[9px] font-black uppercase text-primary/20 tracking-widest mb-2">Update Status</p>

                          <Button
                            variant="outline"
                            size="sm"
                            className="justify-start text-[10px] font-bold h-9 rounded-lg border-blue-100 text-blue-600 hover:bg-blue-50"
                            onClick={() => handleUpdateStatus(inquiry.id, 'reviewed')}
                          >
                            <CheckCircle2 className="mr-2 h-3.5 w-3.5" /> Mark Reviewed
                          </Button>

                          <Button
                            variant="outline"
                            size="sm"
                            className="justify-start text-[10px] font-bold h-9 rounded-lg border-green-100 text-green-600 hover:bg-green-50"
                            onClick={() => handleUpdateStatus(inquiry.id, 'contacted')}
                          >
                            <Mail className="mr-2 h-3.5 w-3.5" /> Mark Contacted
                          </Button>

                          <Button
                            variant="outline"
                            size="sm"
                            className="justify-start text-[10px] font-bold h-9 rounded-lg border-slate-100 text-slate-600 hover:bg-slate-50"
                            onClick={() => handleUpdateStatus(inquiry.id, 'archived')}
                          >
                            <Clock className="mr-2 h-3.5 w-3.5" /> Archive Inquiry
                          </Button>

                          <div className="mt-auto pt-4">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full justify-start text-[10px] font-bold h-9 rounded-lg text-red-500 hover:bg-red-50 hover:text-red-600"
                              onClick={() => handleDelete(inquiry.id, inquiry.name)}
                            >
                              <Trash2 className="mr-2 h-3.5 w-3.5" /> Delete Entry
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-40 text-center flex flex-col items-center gap-6">
                  <Mail className="h-16 w-16 text-primary/5" />
                  <p className="text-sm text-muted-foreground italic font-medium">No submissions found matching your filters.</p>
                </div>
              )}
            </CardContent>
          </Card>

          {!inquiriesLoading && filteredInquiries.length > 0 && (
            <div className="flex justify-center items-center gap-4 flex-wrap">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="rounded-lg border-slate-200 h-9 w-9 bg-white shadow-sm"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex items-center gap-2 flex-wrap justify-center">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className={`w-9 h-9 p-0 rounded-lg text-[10px] font-black ${
                      currentPage === page
                        ? 'bg-primary text-white shadow-lg'
                        : 'text-primary/40 hover:bg-white hover:shadow-sm'
                    }`}
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="rounded-lg border-slate-200 h-9 w-9 bg-white shadow-sm"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
