
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Member
 * 
 */
export type Member = $Result.DefaultSelection<Prisma.$MemberPayload>
/**
 * Model Journal
 * 
 */
export type Journal = $Result.DefaultSelection<Prisma.$JournalPayload>
/**
 * Model MembershipTier
 * 
 */
export type MembershipTier = $Result.DefaultSelection<Prisma.$MembershipTierPayload>
/**
 * Model Conference
 * 
 */
export type Conference = $Result.DefaultSelection<Prisma.$ConferencePayload>
/**
 * Model Inquiry
 * 
 */
export type Inquiry = $Result.DefaultSelection<Prisma.$InquiryPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model PricingPlan
 * 
 */
export type PricingPlan = $Result.DefaultSelection<Prisma.$PricingPlanPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Members
 * const members = await prisma.member.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Members
   * const members = await prisma.member.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.journal`: Exposes CRUD operations for the **Journal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Journals
    * const journals = await prisma.journal.findMany()
    * ```
    */
  get journal(): Prisma.JournalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.membershipTier`: Exposes CRUD operations for the **MembershipTier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MembershipTiers
    * const membershipTiers = await prisma.membershipTier.findMany()
    * ```
    */
  get membershipTier(): Prisma.MembershipTierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conference`: Exposes CRUD operations for the **Conference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conferences
    * const conferences = await prisma.conference.findMany()
    * ```
    */
  get conference(): Prisma.ConferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inquiry`: Exposes CRUD operations for the **Inquiry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inquiries
    * const inquiries = await prisma.inquiry.findMany()
    * ```
    */
  get inquiry(): Prisma.InquiryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pricingPlan`: Exposes CRUD operations for the **PricingPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PricingPlans
    * const pricingPlans = await prisma.pricingPlan.findMany()
    * ```
    */
  get pricingPlan(): Prisma.PricingPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Member: 'Member',
    Journal: 'Journal',
    MembershipTier: 'MembershipTier',
    Conference: 'Conference',
    Inquiry: 'Inquiry',
    Event: 'Event',
    PricingPlan: 'PricingPlan',
    Admin: 'Admin'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "member" | "journal" | "membershipTier" | "conference" | "inquiry" | "event" | "pricingPlan" | "admin"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Member: {
        payload: Prisma.$MemberPayload<ExtArgs>
        fields: Prisma.MemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      Journal: {
        payload: Prisma.$JournalPayload<ExtArgs>
        fields: Prisma.JournalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JournalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JournalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalPayload>
          }
          findFirst: {
            args: Prisma.JournalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JournalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalPayload>
          }
          findMany: {
            args: Prisma.JournalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalPayload>[]
          }
          create: {
            args: Prisma.JournalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalPayload>
          }
          createMany: {
            args: Prisma.JournalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JournalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalPayload>
          }
          update: {
            args: Prisma.JournalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalPayload>
          }
          deleteMany: {
            args: Prisma.JournalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JournalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JournalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalPayload>
          }
          aggregate: {
            args: Prisma.JournalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJournal>
          }
          groupBy: {
            args: Prisma.JournalGroupByArgs<ExtArgs>
            result: $Utils.Optional<JournalGroupByOutputType>[]
          }
          count: {
            args: Prisma.JournalCountArgs<ExtArgs>
            result: $Utils.Optional<JournalCountAggregateOutputType> | number
          }
        }
      }
      MembershipTier: {
        payload: Prisma.$MembershipTierPayload<ExtArgs>
        fields: Prisma.MembershipTierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MembershipTierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipTierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MembershipTierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipTierPayload>
          }
          findFirst: {
            args: Prisma.MembershipTierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipTierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MembershipTierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipTierPayload>
          }
          findMany: {
            args: Prisma.MembershipTierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipTierPayload>[]
          }
          create: {
            args: Prisma.MembershipTierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipTierPayload>
          }
          createMany: {
            args: Prisma.MembershipTierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MembershipTierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipTierPayload>
          }
          update: {
            args: Prisma.MembershipTierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipTierPayload>
          }
          deleteMany: {
            args: Prisma.MembershipTierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MembershipTierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MembershipTierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipTierPayload>
          }
          aggregate: {
            args: Prisma.MembershipTierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembershipTier>
          }
          groupBy: {
            args: Prisma.MembershipTierGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembershipTierGroupByOutputType>[]
          }
          count: {
            args: Prisma.MembershipTierCountArgs<ExtArgs>
            result: $Utils.Optional<MembershipTierCountAggregateOutputType> | number
          }
        }
      }
      Conference: {
        payload: Prisma.$ConferencePayload<ExtArgs>
        fields: Prisma.ConferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferencePayload>
          }
          findFirst: {
            args: Prisma.ConferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferencePayload>
          }
          findMany: {
            args: Prisma.ConferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferencePayload>[]
          }
          create: {
            args: Prisma.ConferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferencePayload>
          }
          createMany: {
            args: Prisma.ConferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ConferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferencePayload>
          }
          update: {
            args: Prisma.ConferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferencePayload>
          }
          deleteMany: {
            args: Prisma.ConferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferencePayload>
          }
          aggregate: {
            args: Prisma.ConferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConference>
          }
          groupBy: {
            args: Prisma.ConferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConferenceCountArgs<ExtArgs>
            result: $Utils.Optional<ConferenceCountAggregateOutputType> | number
          }
        }
      }
      Inquiry: {
        payload: Prisma.$InquiryPayload<ExtArgs>
        fields: Prisma.InquiryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InquiryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InquiryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          findFirst: {
            args: Prisma.InquiryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InquiryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          findMany: {
            args: Prisma.InquiryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>[]
          }
          create: {
            args: Prisma.InquiryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          createMany: {
            args: Prisma.InquiryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InquiryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          update: {
            args: Prisma.InquiryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          deleteMany: {
            args: Prisma.InquiryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InquiryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InquiryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          aggregate: {
            args: Prisma.InquiryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInquiry>
          }
          groupBy: {
            args: Prisma.InquiryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InquiryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InquiryCountArgs<ExtArgs>
            result: $Utils.Optional<InquiryCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      PricingPlan: {
        payload: Prisma.$PricingPlanPayload<ExtArgs>
        fields: Prisma.PricingPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PricingPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PricingPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>
          }
          findFirst: {
            args: Prisma.PricingPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PricingPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>
          }
          findMany: {
            args: Prisma.PricingPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>[]
          }
          create: {
            args: Prisma.PricingPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>
          }
          createMany: {
            args: Prisma.PricingPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PricingPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>
          }
          update: {
            args: Prisma.PricingPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>
          }
          deleteMany: {
            args: Prisma.PricingPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PricingPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PricingPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>
          }
          aggregate: {
            args: Prisma.PricingPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePricingPlan>
          }
          groupBy: {
            args: Prisma.PricingPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PricingPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PricingPlanCountArgs<ExtArgs>
            result: $Utils.Optional<PricingPlanCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    member?: MemberOmit
    journal?: JournalOmit
    membershipTier?: MembershipTierOmit
    conference?: ConferenceOmit
    inquiry?: InquiryOmit
    event?: EventOmit
    pricingPlan?: PricingPlanOmit
    admin?: AdminOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberAvgAggregateOutputType = {
    id: number | null
  }

  export type MemberSumAggregateOutputType = {
    id: number | null
  }

  export type MemberMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    institution: string | null
    tier: string | null
    status: string | null
    joinedAt: Date | null
    updatedAt: Date | null
  }

  export type MemberMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    institution: string | null
    tier: string | null
    status: string | null
    joinedAt: Date | null
    updatedAt: Date | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    institution: number
    tier: number
    status: number
    joinedAt: number
    updatedAt: number
    _all: number
  }


  export type MemberAvgAggregateInputType = {
    id?: true
  }

  export type MemberSumAggregateInputType = {
    id?: true
  }

  export type MemberMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    institution?: true
    tier?: true
    status?: true
    joinedAt?: true
    updatedAt?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    institution?: true
    tier?: true
    status?: true
    joinedAt?: true
    updatedAt?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    institution?: true
    tier?: true
    status?: true
    joinedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithAggregationInput | MemberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _avg?: MemberAvgAggregateInputType
    _sum?: MemberSumAggregateInputType
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string | null
    institution: string | null
    tier: string | null
    status: string
    joinedAt: Date
    updatedAt: Date
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    institution?: boolean
    tier?: boolean
    status?: boolean
    joinedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["member"]>



  export type MemberSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    institution?: boolean
    tier?: boolean
    status?: boolean
    joinedAt?: boolean
    updatedAt?: boolean
  }

  export type MemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "institution" | "tier" | "status" | "joinedAt" | "updatedAt", ExtArgs["result"]["member"]>

  export type $MemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string | null
      institution: string | null
      tier: string | null
      status: string
      joinedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = $Result.GetResult<Prisma.$MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberFindUniqueArgs>(args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberFindFirstArgs>(args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberFindManyArgs>(args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends MemberCreateArgs>(args: SelectSubset<T, MemberCreateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {MemberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberCreateManyArgs>(args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends MemberDeleteArgs>(args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberUpdateArgs>(args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberDeleteManyArgs>(args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberUpdateManyArgs>(args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends MemberUpsertArgs>(args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member model
   */
  readonly fields: MemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Member model
   */
  interface MemberFieldRefs {
    readonly id: FieldRef<"Member", 'Int'>
    readonly name: FieldRef<"Member", 'String'>
    readonly email: FieldRef<"Member", 'String'>
    readonly phone: FieldRef<"Member", 'String'>
    readonly institution: FieldRef<"Member", 'String'>
    readonly tier: FieldRef<"Member", 'String'>
    readonly status: FieldRef<"Member", 'String'>
    readonly joinedAt: FieldRef<"Member", 'DateTime'>
    readonly updatedAt: FieldRef<"Member", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Member findUnique
   */
  export type MemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findFirst
   */
  export type MemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }

  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
  }

  /**
   * Member upsert
   */
  export type MemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }

  /**
   * Member delete
   */
  export type MemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to delete.
     */
    limit?: number
  }

  /**
   * Member without action
   */
  export type MemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
  }


  /**
   * Model Journal
   */

  export type AggregateJournal = {
    _count: JournalCountAggregateOutputType | null
    _avg: JournalAvgAggregateOutputType | null
    _sum: JournalSumAggregateOutputType | null
    _min: JournalMinAggregateOutputType | null
    _max: JournalMaxAggregateOutputType | null
  }

  export type JournalAvgAggregateOutputType = {
    id: number | null
  }

  export type JournalSumAggregateOutputType = {
    id: number | null
  }

  export type JournalMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    issn: string | null
    domain: string | null
    link: string | null
    imageUrl: string | null
    isFeatured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JournalMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    issn: string | null
    domain: string | null
    link: string | null
    imageUrl: string | null
    isFeatured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JournalCountAggregateOutputType = {
    id: number
    name: number
    description: number
    issn: number
    domain: number
    indexing: number
    link: number
    imageUrl: number
    isFeatured: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JournalAvgAggregateInputType = {
    id?: true
  }

  export type JournalSumAggregateInputType = {
    id?: true
  }

  export type JournalMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    issn?: true
    domain?: true
    link?: true
    imageUrl?: true
    isFeatured?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JournalMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    issn?: true
    domain?: true
    link?: true
    imageUrl?: true
    isFeatured?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JournalCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    issn?: true
    domain?: true
    indexing?: true
    link?: true
    imageUrl?: true
    isFeatured?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JournalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Journal to aggregate.
     */
    where?: JournalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Journals to fetch.
     */
    orderBy?: JournalOrderByWithRelationInput | JournalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JournalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Journals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Journals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Journals
    **/
    _count?: true | JournalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JournalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JournalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JournalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JournalMaxAggregateInputType
  }

  export type GetJournalAggregateType<T extends JournalAggregateArgs> = {
        [P in keyof T & keyof AggregateJournal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJournal[P]>
      : GetScalarType<T[P], AggregateJournal[P]>
  }




  export type JournalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JournalWhereInput
    orderBy?: JournalOrderByWithAggregationInput | JournalOrderByWithAggregationInput[]
    by: JournalScalarFieldEnum[] | JournalScalarFieldEnum
    having?: JournalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JournalCountAggregateInputType | true
    _avg?: JournalAvgAggregateInputType
    _sum?: JournalSumAggregateInputType
    _min?: JournalMinAggregateInputType
    _max?: JournalMaxAggregateInputType
  }

  export type JournalGroupByOutputType = {
    id: number
    name: string
    description: string | null
    issn: string | null
    domain: string | null
    indexing: JsonValue | null
    link: string | null
    imageUrl: string | null
    isFeatured: boolean
    createdAt: Date
    updatedAt: Date
    _count: JournalCountAggregateOutputType | null
    _avg: JournalAvgAggregateOutputType | null
    _sum: JournalSumAggregateOutputType | null
    _min: JournalMinAggregateOutputType | null
    _max: JournalMaxAggregateOutputType | null
  }

  type GetJournalGroupByPayload<T extends JournalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JournalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JournalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JournalGroupByOutputType[P]>
            : GetScalarType<T[P], JournalGroupByOutputType[P]>
        }
      >
    >


  export type JournalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    issn?: boolean
    domain?: boolean
    indexing?: boolean
    link?: boolean
    imageUrl?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["journal"]>



  export type JournalSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    issn?: boolean
    domain?: boolean
    indexing?: boolean
    link?: boolean
    imageUrl?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JournalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "issn" | "domain" | "indexing" | "link" | "imageUrl" | "isFeatured" | "createdAt" | "updatedAt", ExtArgs["result"]["journal"]>

  export type $JournalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Journal"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      issn: string | null
      domain: string | null
      indexing: Prisma.JsonValue | null
      link: string | null
      imageUrl: string | null
      isFeatured: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["journal"]>
    composites: {}
  }

  type JournalGetPayload<S extends boolean | null | undefined | JournalDefaultArgs> = $Result.GetResult<Prisma.$JournalPayload, S>

  type JournalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JournalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JournalCountAggregateInputType | true
    }

  export interface JournalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Journal'], meta: { name: 'Journal' } }
    /**
     * Find zero or one Journal that matches the filter.
     * @param {JournalFindUniqueArgs} args - Arguments to find a Journal
     * @example
     * // Get one Journal
     * const journal = await prisma.journal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JournalFindUniqueArgs>(args: SelectSubset<T, JournalFindUniqueArgs<ExtArgs>>): Prisma__JournalClient<$Result.GetResult<Prisma.$JournalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Journal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JournalFindUniqueOrThrowArgs} args - Arguments to find a Journal
     * @example
     * // Get one Journal
     * const journal = await prisma.journal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JournalFindUniqueOrThrowArgs>(args: SelectSubset<T, JournalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JournalClient<$Result.GetResult<Prisma.$JournalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Journal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalFindFirstArgs} args - Arguments to find a Journal
     * @example
     * // Get one Journal
     * const journal = await prisma.journal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JournalFindFirstArgs>(args?: SelectSubset<T, JournalFindFirstArgs<ExtArgs>>): Prisma__JournalClient<$Result.GetResult<Prisma.$JournalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Journal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalFindFirstOrThrowArgs} args - Arguments to find a Journal
     * @example
     * // Get one Journal
     * const journal = await prisma.journal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JournalFindFirstOrThrowArgs>(args?: SelectSubset<T, JournalFindFirstOrThrowArgs<ExtArgs>>): Prisma__JournalClient<$Result.GetResult<Prisma.$JournalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Journals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Journals
     * const journals = await prisma.journal.findMany()
     * 
     * // Get first 10 Journals
     * const journals = await prisma.journal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const journalWithIdOnly = await prisma.journal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JournalFindManyArgs>(args?: SelectSubset<T, JournalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Journal.
     * @param {JournalCreateArgs} args - Arguments to create a Journal.
     * @example
     * // Create one Journal
     * const Journal = await prisma.journal.create({
     *   data: {
     *     // ... data to create a Journal
     *   }
     * })
     * 
     */
    create<T extends JournalCreateArgs>(args: SelectSubset<T, JournalCreateArgs<ExtArgs>>): Prisma__JournalClient<$Result.GetResult<Prisma.$JournalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Journals.
     * @param {JournalCreateManyArgs} args - Arguments to create many Journals.
     * @example
     * // Create many Journals
     * const journal = await prisma.journal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JournalCreateManyArgs>(args?: SelectSubset<T, JournalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Journal.
     * @param {JournalDeleteArgs} args - Arguments to delete one Journal.
     * @example
     * // Delete one Journal
     * const Journal = await prisma.journal.delete({
     *   where: {
     *     // ... filter to delete one Journal
     *   }
     * })
     * 
     */
    delete<T extends JournalDeleteArgs>(args: SelectSubset<T, JournalDeleteArgs<ExtArgs>>): Prisma__JournalClient<$Result.GetResult<Prisma.$JournalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Journal.
     * @param {JournalUpdateArgs} args - Arguments to update one Journal.
     * @example
     * // Update one Journal
     * const journal = await prisma.journal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JournalUpdateArgs>(args: SelectSubset<T, JournalUpdateArgs<ExtArgs>>): Prisma__JournalClient<$Result.GetResult<Prisma.$JournalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Journals.
     * @param {JournalDeleteManyArgs} args - Arguments to filter Journals to delete.
     * @example
     * // Delete a few Journals
     * const { count } = await prisma.journal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JournalDeleteManyArgs>(args?: SelectSubset<T, JournalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Journals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Journals
     * const journal = await prisma.journal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JournalUpdateManyArgs>(args: SelectSubset<T, JournalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Journal.
     * @param {JournalUpsertArgs} args - Arguments to update or create a Journal.
     * @example
     * // Update or create a Journal
     * const journal = await prisma.journal.upsert({
     *   create: {
     *     // ... data to create a Journal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Journal we want to update
     *   }
     * })
     */
    upsert<T extends JournalUpsertArgs>(args: SelectSubset<T, JournalUpsertArgs<ExtArgs>>): Prisma__JournalClient<$Result.GetResult<Prisma.$JournalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Journals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalCountArgs} args - Arguments to filter Journals to count.
     * @example
     * // Count the number of Journals
     * const count = await prisma.journal.count({
     *   where: {
     *     // ... the filter for the Journals we want to count
     *   }
     * })
    **/
    count<T extends JournalCountArgs>(
      args?: Subset<T, JournalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JournalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Journal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JournalAggregateArgs>(args: Subset<T, JournalAggregateArgs>): Prisma.PrismaPromise<GetJournalAggregateType<T>>

    /**
     * Group by Journal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JournalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JournalGroupByArgs['orderBy'] }
        : { orderBy?: JournalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JournalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJournalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Journal model
   */
  readonly fields: JournalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Journal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JournalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Journal model
   */
  interface JournalFieldRefs {
    readonly id: FieldRef<"Journal", 'Int'>
    readonly name: FieldRef<"Journal", 'String'>
    readonly description: FieldRef<"Journal", 'String'>
    readonly issn: FieldRef<"Journal", 'String'>
    readonly domain: FieldRef<"Journal", 'String'>
    readonly indexing: FieldRef<"Journal", 'Json'>
    readonly link: FieldRef<"Journal", 'String'>
    readonly imageUrl: FieldRef<"Journal", 'String'>
    readonly isFeatured: FieldRef<"Journal", 'Boolean'>
    readonly createdAt: FieldRef<"Journal", 'DateTime'>
    readonly updatedAt: FieldRef<"Journal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Journal findUnique
   */
  export type JournalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journal
     */
    select?: JournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journal
     */
    omit?: JournalOmit<ExtArgs> | null
    /**
     * Filter, which Journal to fetch.
     */
    where: JournalWhereUniqueInput
  }

  /**
   * Journal findUniqueOrThrow
   */
  export type JournalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journal
     */
    select?: JournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journal
     */
    omit?: JournalOmit<ExtArgs> | null
    /**
     * Filter, which Journal to fetch.
     */
    where: JournalWhereUniqueInput
  }

  /**
   * Journal findFirst
   */
  export type JournalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journal
     */
    select?: JournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journal
     */
    omit?: JournalOmit<ExtArgs> | null
    /**
     * Filter, which Journal to fetch.
     */
    where?: JournalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Journals to fetch.
     */
    orderBy?: JournalOrderByWithRelationInput | JournalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Journals.
     */
    cursor?: JournalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Journals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Journals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Journals.
     */
    distinct?: JournalScalarFieldEnum | JournalScalarFieldEnum[]
  }

  /**
   * Journal findFirstOrThrow
   */
  export type JournalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journal
     */
    select?: JournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journal
     */
    omit?: JournalOmit<ExtArgs> | null
    /**
     * Filter, which Journal to fetch.
     */
    where?: JournalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Journals to fetch.
     */
    orderBy?: JournalOrderByWithRelationInput | JournalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Journals.
     */
    cursor?: JournalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Journals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Journals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Journals.
     */
    distinct?: JournalScalarFieldEnum | JournalScalarFieldEnum[]
  }

  /**
   * Journal findMany
   */
  export type JournalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journal
     */
    select?: JournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journal
     */
    omit?: JournalOmit<ExtArgs> | null
    /**
     * Filter, which Journals to fetch.
     */
    where?: JournalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Journals to fetch.
     */
    orderBy?: JournalOrderByWithRelationInput | JournalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Journals.
     */
    cursor?: JournalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Journals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Journals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Journals.
     */
    distinct?: JournalScalarFieldEnum | JournalScalarFieldEnum[]
  }

  /**
   * Journal create
   */
  export type JournalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journal
     */
    select?: JournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journal
     */
    omit?: JournalOmit<ExtArgs> | null
    /**
     * The data needed to create a Journal.
     */
    data: XOR<JournalCreateInput, JournalUncheckedCreateInput>
  }

  /**
   * Journal createMany
   */
  export type JournalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Journals.
     */
    data: JournalCreateManyInput | JournalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Journal update
   */
  export type JournalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journal
     */
    select?: JournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journal
     */
    omit?: JournalOmit<ExtArgs> | null
    /**
     * The data needed to update a Journal.
     */
    data: XOR<JournalUpdateInput, JournalUncheckedUpdateInput>
    /**
     * Choose, which Journal to update.
     */
    where: JournalWhereUniqueInput
  }

  /**
   * Journal updateMany
   */
  export type JournalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Journals.
     */
    data: XOR<JournalUpdateManyMutationInput, JournalUncheckedUpdateManyInput>
    /**
     * Filter which Journals to update
     */
    where?: JournalWhereInput
    /**
     * Limit how many Journals to update.
     */
    limit?: number
  }

  /**
   * Journal upsert
   */
  export type JournalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journal
     */
    select?: JournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journal
     */
    omit?: JournalOmit<ExtArgs> | null
    /**
     * The filter to search for the Journal to update in case it exists.
     */
    where: JournalWhereUniqueInput
    /**
     * In case the Journal found by the `where` argument doesn't exist, create a new Journal with this data.
     */
    create: XOR<JournalCreateInput, JournalUncheckedCreateInput>
    /**
     * In case the Journal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JournalUpdateInput, JournalUncheckedUpdateInput>
  }

  /**
   * Journal delete
   */
  export type JournalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journal
     */
    select?: JournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journal
     */
    omit?: JournalOmit<ExtArgs> | null
    /**
     * Filter which Journal to delete.
     */
    where: JournalWhereUniqueInput
  }

  /**
   * Journal deleteMany
   */
  export type JournalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Journals to delete
     */
    where?: JournalWhereInput
    /**
     * Limit how many Journals to delete.
     */
    limit?: number
  }

  /**
   * Journal without action
   */
  export type JournalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journal
     */
    select?: JournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journal
     */
    omit?: JournalOmit<ExtArgs> | null
  }


  /**
   * Model MembershipTier
   */

  export type AggregateMembershipTier = {
    _count: MembershipTierCountAggregateOutputType | null
    _avg: MembershipTierAvgAggregateOutputType | null
    _sum: MembershipTierSumAggregateOutputType | null
    _min: MembershipTierMinAggregateOutputType | null
    _max: MembershipTierMaxAggregateOutputType | null
  }

  export type MembershipTierAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type MembershipTierSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type MembershipTierMinAggregateOutputType = {
    id: number | null
    name: string | null
    icon: string | null
    priceINR: string | null
    priceUSD: string | null
    description: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MembershipTierMaxAggregateOutputType = {
    id: number | null
    name: string | null
    icon: string | null
    priceINR: string | null
    priceUSD: string | null
    description: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MembershipTierCountAggregateOutputType = {
    id: number
    name: number
    icon: number
    priceINR: number
    priceUSD: number
    description: number
    benefits: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MembershipTierAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type MembershipTierSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type MembershipTierMinAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    priceINR?: true
    priceUSD?: true
    description?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MembershipTierMaxAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    priceINR?: true
    priceUSD?: true
    description?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MembershipTierCountAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    priceINR?: true
    priceUSD?: true
    description?: true
    benefits?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MembershipTierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MembershipTier to aggregate.
     */
    where?: MembershipTierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembershipTiers to fetch.
     */
    orderBy?: MembershipTierOrderByWithRelationInput | MembershipTierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MembershipTierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembershipTiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembershipTiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MembershipTiers
    **/
    _count?: true | MembershipTierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MembershipTierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MembershipTierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembershipTierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembershipTierMaxAggregateInputType
  }

  export type GetMembershipTierAggregateType<T extends MembershipTierAggregateArgs> = {
        [P in keyof T & keyof AggregateMembershipTier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembershipTier[P]>
      : GetScalarType<T[P], AggregateMembershipTier[P]>
  }




  export type MembershipTierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipTierWhereInput
    orderBy?: MembershipTierOrderByWithAggregationInput | MembershipTierOrderByWithAggregationInput[]
    by: MembershipTierScalarFieldEnum[] | MembershipTierScalarFieldEnum
    having?: MembershipTierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembershipTierCountAggregateInputType | true
    _avg?: MembershipTierAvgAggregateInputType
    _sum?: MembershipTierSumAggregateInputType
    _min?: MembershipTierMinAggregateInputType
    _max?: MembershipTierMaxAggregateInputType
  }

  export type MembershipTierGroupByOutputType = {
    id: number
    name: string
    icon: string | null
    priceINR: string
    priceUSD: string
    description: string | null
    benefits: JsonValue | null
    order: number
    createdAt: Date
    updatedAt: Date
    _count: MembershipTierCountAggregateOutputType | null
    _avg: MembershipTierAvgAggregateOutputType | null
    _sum: MembershipTierSumAggregateOutputType | null
    _min: MembershipTierMinAggregateOutputType | null
    _max: MembershipTierMaxAggregateOutputType | null
  }

  type GetMembershipTierGroupByPayload<T extends MembershipTierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembershipTierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembershipTierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembershipTierGroupByOutputType[P]>
            : GetScalarType<T[P], MembershipTierGroupByOutputType[P]>
        }
      >
    >


  export type MembershipTierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    priceINR?: boolean
    priceUSD?: boolean
    description?: boolean
    benefits?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["membershipTier"]>



  export type MembershipTierSelectScalar = {
    id?: boolean
    name?: boolean
    icon?: boolean
    priceINR?: boolean
    priceUSD?: boolean
    description?: boolean
    benefits?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MembershipTierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "icon" | "priceINR" | "priceUSD" | "description" | "benefits" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["membershipTier"]>

  export type $MembershipTierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MembershipTier"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      icon: string | null
      priceINR: string
      priceUSD: string
      description: string | null
      benefits: Prisma.JsonValue | null
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["membershipTier"]>
    composites: {}
  }

  type MembershipTierGetPayload<S extends boolean | null | undefined | MembershipTierDefaultArgs> = $Result.GetResult<Prisma.$MembershipTierPayload, S>

  type MembershipTierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MembershipTierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MembershipTierCountAggregateInputType | true
    }

  export interface MembershipTierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MembershipTier'], meta: { name: 'MembershipTier' } }
    /**
     * Find zero or one MembershipTier that matches the filter.
     * @param {MembershipTierFindUniqueArgs} args - Arguments to find a MembershipTier
     * @example
     * // Get one MembershipTier
     * const membershipTier = await prisma.membershipTier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MembershipTierFindUniqueArgs>(args: SelectSubset<T, MembershipTierFindUniqueArgs<ExtArgs>>): Prisma__MembershipTierClient<$Result.GetResult<Prisma.$MembershipTierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MembershipTier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MembershipTierFindUniqueOrThrowArgs} args - Arguments to find a MembershipTier
     * @example
     * // Get one MembershipTier
     * const membershipTier = await prisma.membershipTier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MembershipTierFindUniqueOrThrowArgs>(args: SelectSubset<T, MembershipTierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MembershipTierClient<$Result.GetResult<Prisma.$MembershipTierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MembershipTier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipTierFindFirstArgs} args - Arguments to find a MembershipTier
     * @example
     * // Get one MembershipTier
     * const membershipTier = await prisma.membershipTier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MembershipTierFindFirstArgs>(args?: SelectSubset<T, MembershipTierFindFirstArgs<ExtArgs>>): Prisma__MembershipTierClient<$Result.GetResult<Prisma.$MembershipTierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MembershipTier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipTierFindFirstOrThrowArgs} args - Arguments to find a MembershipTier
     * @example
     * // Get one MembershipTier
     * const membershipTier = await prisma.membershipTier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MembershipTierFindFirstOrThrowArgs>(args?: SelectSubset<T, MembershipTierFindFirstOrThrowArgs<ExtArgs>>): Prisma__MembershipTierClient<$Result.GetResult<Prisma.$MembershipTierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MembershipTiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipTierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MembershipTiers
     * const membershipTiers = await prisma.membershipTier.findMany()
     * 
     * // Get first 10 MembershipTiers
     * const membershipTiers = await prisma.membershipTier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const membershipTierWithIdOnly = await prisma.membershipTier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MembershipTierFindManyArgs>(args?: SelectSubset<T, MembershipTierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipTierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MembershipTier.
     * @param {MembershipTierCreateArgs} args - Arguments to create a MembershipTier.
     * @example
     * // Create one MembershipTier
     * const MembershipTier = await prisma.membershipTier.create({
     *   data: {
     *     // ... data to create a MembershipTier
     *   }
     * })
     * 
     */
    create<T extends MembershipTierCreateArgs>(args: SelectSubset<T, MembershipTierCreateArgs<ExtArgs>>): Prisma__MembershipTierClient<$Result.GetResult<Prisma.$MembershipTierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MembershipTiers.
     * @param {MembershipTierCreateManyArgs} args - Arguments to create many MembershipTiers.
     * @example
     * // Create many MembershipTiers
     * const membershipTier = await prisma.membershipTier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MembershipTierCreateManyArgs>(args?: SelectSubset<T, MembershipTierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MembershipTier.
     * @param {MembershipTierDeleteArgs} args - Arguments to delete one MembershipTier.
     * @example
     * // Delete one MembershipTier
     * const MembershipTier = await prisma.membershipTier.delete({
     *   where: {
     *     // ... filter to delete one MembershipTier
     *   }
     * })
     * 
     */
    delete<T extends MembershipTierDeleteArgs>(args: SelectSubset<T, MembershipTierDeleteArgs<ExtArgs>>): Prisma__MembershipTierClient<$Result.GetResult<Prisma.$MembershipTierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MembershipTier.
     * @param {MembershipTierUpdateArgs} args - Arguments to update one MembershipTier.
     * @example
     * // Update one MembershipTier
     * const membershipTier = await prisma.membershipTier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MembershipTierUpdateArgs>(args: SelectSubset<T, MembershipTierUpdateArgs<ExtArgs>>): Prisma__MembershipTierClient<$Result.GetResult<Prisma.$MembershipTierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MembershipTiers.
     * @param {MembershipTierDeleteManyArgs} args - Arguments to filter MembershipTiers to delete.
     * @example
     * // Delete a few MembershipTiers
     * const { count } = await prisma.membershipTier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MembershipTierDeleteManyArgs>(args?: SelectSubset<T, MembershipTierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MembershipTiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipTierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MembershipTiers
     * const membershipTier = await prisma.membershipTier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MembershipTierUpdateManyArgs>(args: SelectSubset<T, MembershipTierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MembershipTier.
     * @param {MembershipTierUpsertArgs} args - Arguments to update or create a MembershipTier.
     * @example
     * // Update or create a MembershipTier
     * const membershipTier = await prisma.membershipTier.upsert({
     *   create: {
     *     // ... data to create a MembershipTier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MembershipTier we want to update
     *   }
     * })
     */
    upsert<T extends MembershipTierUpsertArgs>(args: SelectSubset<T, MembershipTierUpsertArgs<ExtArgs>>): Prisma__MembershipTierClient<$Result.GetResult<Prisma.$MembershipTierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MembershipTiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipTierCountArgs} args - Arguments to filter MembershipTiers to count.
     * @example
     * // Count the number of MembershipTiers
     * const count = await prisma.membershipTier.count({
     *   where: {
     *     // ... the filter for the MembershipTiers we want to count
     *   }
     * })
    **/
    count<T extends MembershipTierCountArgs>(
      args?: Subset<T, MembershipTierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembershipTierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MembershipTier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipTierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MembershipTierAggregateArgs>(args: Subset<T, MembershipTierAggregateArgs>): Prisma.PrismaPromise<GetMembershipTierAggregateType<T>>

    /**
     * Group by MembershipTier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipTierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MembershipTierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MembershipTierGroupByArgs['orderBy'] }
        : { orderBy?: MembershipTierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MembershipTierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembershipTierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MembershipTier model
   */
  readonly fields: MembershipTierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MembershipTier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MembershipTierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MembershipTier model
   */
  interface MembershipTierFieldRefs {
    readonly id: FieldRef<"MembershipTier", 'Int'>
    readonly name: FieldRef<"MembershipTier", 'String'>
    readonly icon: FieldRef<"MembershipTier", 'String'>
    readonly priceINR: FieldRef<"MembershipTier", 'String'>
    readonly priceUSD: FieldRef<"MembershipTier", 'String'>
    readonly description: FieldRef<"MembershipTier", 'String'>
    readonly benefits: FieldRef<"MembershipTier", 'Json'>
    readonly order: FieldRef<"MembershipTier", 'Int'>
    readonly createdAt: FieldRef<"MembershipTier", 'DateTime'>
    readonly updatedAt: FieldRef<"MembershipTier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MembershipTier findUnique
   */
  export type MembershipTierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipTier
     */
    select?: MembershipTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipTier
     */
    omit?: MembershipTierOmit<ExtArgs> | null
    /**
     * Filter, which MembershipTier to fetch.
     */
    where: MembershipTierWhereUniqueInput
  }

  /**
   * MembershipTier findUniqueOrThrow
   */
  export type MembershipTierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipTier
     */
    select?: MembershipTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipTier
     */
    omit?: MembershipTierOmit<ExtArgs> | null
    /**
     * Filter, which MembershipTier to fetch.
     */
    where: MembershipTierWhereUniqueInput
  }

  /**
   * MembershipTier findFirst
   */
  export type MembershipTierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipTier
     */
    select?: MembershipTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipTier
     */
    omit?: MembershipTierOmit<ExtArgs> | null
    /**
     * Filter, which MembershipTier to fetch.
     */
    where?: MembershipTierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembershipTiers to fetch.
     */
    orderBy?: MembershipTierOrderByWithRelationInput | MembershipTierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MembershipTiers.
     */
    cursor?: MembershipTierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembershipTiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembershipTiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MembershipTiers.
     */
    distinct?: MembershipTierScalarFieldEnum | MembershipTierScalarFieldEnum[]
  }

  /**
   * MembershipTier findFirstOrThrow
   */
  export type MembershipTierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipTier
     */
    select?: MembershipTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipTier
     */
    omit?: MembershipTierOmit<ExtArgs> | null
    /**
     * Filter, which MembershipTier to fetch.
     */
    where?: MembershipTierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembershipTiers to fetch.
     */
    orderBy?: MembershipTierOrderByWithRelationInput | MembershipTierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MembershipTiers.
     */
    cursor?: MembershipTierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembershipTiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembershipTiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MembershipTiers.
     */
    distinct?: MembershipTierScalarFieldEnum | MembershipTierScalarFieldEnum[]
  }

  /**
   * MembershipTier findMany
   */
  export type MembershipTierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipTier
     */
    select?: MembershipTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipTier
     */
    omit?: MembershipTierOmit<ExtArgs> | null
    /**
     * Filter, which MembershipTiers to fetch.
     */
    where?: MembershipTierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembershipTiers to fetch.
     */
    orderBy?: MembershipTierOrderByWithRelationInput | MembershipTierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MembershipTiers.
     */
    cursor?: MembershipTierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembershipTiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembershipTiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MembershipTiers.
     */
    distinct?: MembershipTierScalarFieldEnum | MembershipTierScalarFieldEnum[]
  }

  /**
   * MembershipTier create
   */
  export type MembershipTierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipTier
     */
    select?: MembershipTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipTier
     */
    omit?: MembershipTierOmit<ExtArgs> | null
    /**
     * The data needed to create a MembershipTier.
     */
    data: XOR<MembershipTierCreateInput, MembershipTierUncheckedCreateInput>
  }

  /**
   * MembershipTier createMany
   */
  export type MembershipTierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MembershipTiers.
     */
    data: MembershipTierCreateManyInput | MembershipTierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MembershipTier update
   */
  export type MembershipTierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipTier
     */
    select?: MembershipTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipTier
     */
    omit?: MembershipTierOmit<ExtArgs> | null
    /**
     * The data needed to update a MembershipTier.
     */
    data: XOR<MembershipTierUpdateInput, MembershipTierUncheckedUpdateInput>
    /**
     * Choose, which MembershipTier to update.
     */
    where: MembershipTierWhereUniqueInput
  }

  /**
   * MembershipTier updateMany
   */
  export type MembershipTierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MembershipTiers.
     */
    data: XOR<MembershipTierUpdateManyMutationInput, MembershipTierUncheckedUpdateManyInput>
    /**
     * Filter which MembershipTiers to update
     */
    where?: MembershipTierWhereInput
    /**
     * Limit how many MembershipTiers to update.
     */
    limit?: number
  }

  /**
   * MembershipTier upsert
   */
  export type MembershipTierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipTier
     */
    select?: MembershipTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipTier
     */
    omit?: MembershipTierOmit<ExtArgs> | null
    /**
     * The filter to search for the MembershipTier to update in case it exists.
     */
    where: MembershipTierWhereUniqueInput
    /**
     * In case the MembershipTier found by the `where` argument doesn't exist, create a new MembershipTier with this data.
     */
    create: XOR<MembershipTierCreateInput, MembershipTierUncheckedCreateInput>
    /**
     * In case the MembershipTier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MembershipTierUpdateInput, MembershipTierUncheckedUpdateInput>
  }

  /**
   * MembershipTier delete
   */
  export type MembershipTierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipTier
     */
    select?: MembershipTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipTier
     */
    omit?: MembershipTierOmit<ExtArgs> | null
    /**
     * Filter which MembershipTier to delete.
     */
    where: MembershipTierWhereUniqueInput
  }

  /**
   * MembershipTier deleteMany
   */
  export type MembershipTierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MembershipTiers to delete
     */
    where?: MembershipTierWhereInput
    /**
     * Limit how many MembershipTiers to delete.
     */
    limit?: number
  }

  /**
   * MembershipTier without action
   */
  export type MembershipTierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipTier
     */
    select?: MembershipTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipTier
     */
    omit?: MembershipTierOmit<ExtArgs> | null
  }


  /**
   * Model Conference
   */

  export type AggregateConference = {
    _count: ConferenceCountAggregateOutputType | null
    _avg: ConferenceAvgAggregateOutputType | null
    _sum: ConferenceSumAggregateOutputType | null
    _min: ConferenceMinAggregateOutputType | null
    _max: ConferenceMaxAggregateOutputType | null
  }

  export type ConferenceAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type ConferenceSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type ConferenceMinAggregateOutputType = {
    id: number | null
    title: string | null
    shortTitle: string | null
    theme: string | null
    startDate: string | null
    endDate: string | null
    venue: string | null
    country: string | null
    about: string | null
    websiteUrl: string | null
    contactEmail: string | null
    imageUrl: string | null
    brochureUrl: string | null
    organizingCommittee: string | null
    keynoteSpeakers: string | null
    editorialBoard: string | null
    tracks: string | null
    keywords: string | null
    submissionInstructions: string | null
    submissionStartDate: string | null
    abstractDeadline: string | null
    fullPaperDeadline: string | null
    registrationDeadline: string | null
    peerReviewMethod: string | null
    color: string | null
    order: number | null
    isFeatured: boolean | null
    isActive: boolean | null
    date: string | null
    location: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConferenceMaxAggregateOutputType = {
    id: number | null
    title: string | null
    shortTitle: string | null
    theme: string | null
    startDate: string | null
    endDate: string | null
    venue: string | null
    country: string | null
    about: string | null
    websiteUrl: string | null
    contactEmail: string | null
    imageUrl: string | null
    brochureUrl: string | null
    organizingCommittee: string | null
    keynoteSpeakers: string | null
    editorialBoard: string | null
    tracks: string | null
    keywords: string | null
    submissionInstructions: string | null
    submissionStartDate: string | null
    abstractDeadline: string | null
    fullPaperDeadline: string | null
    registrationDeadline: string | null
    peerReviewMethod: string | null
    color: string | null
    order: number | null
    isFeatured: boolean | null
    isActive: boolean | null
    date: string | null
    location: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConferenceCountAggregateOutputType = {
    id: number
    title: number
    shortTitle: number
    theme: number
    startDate: number
    endDate: number
    venue: number
    country: number
    modes: number
    about: number
    websiteUrl: number
    contactEmail: number
    imageUrl: number
    brochureUrl: number
    organizingCommittee: number
    keynoteSpeakers: number
    editorialBoard: number
    tracks: number
    keywords: number
    submissionInstructions: number
    submissionStartDate: number
    abstractDeadline: number
    fullPaperDeadline: number
    registrationDeadline: number
    paperCategories: number
    peerReviewMethod: number
    color: number
    order: number
    isFeatured: number
    isActive: number
    date: number
    location: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConferenceAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type ConferenceSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type ConferenceMinAggregateInputType = {
    id?: true
    title?: true
    shortTitle?: true
    theme?: true
    startDate?: true
    endDate?: true
    venue?: true
    country?: true
    about?: true
    websiteUrl?: true
    contactEmail?: true
    imageUrl?: true
    brochureUrl?: true
    organizingCommittee?: true
    keynoteSpeakers?: true
    editorialBoard?: true
    tracks?: true
    keywords?: true
    submissionInstructions?: true
    submissionStartDate?: true
    abstractDeadline?: true
    fullPaperDeadline?: true
    registrationDeadline?: true
    peerReviewMethod?: true
    color?: true
    order?: true
    isFeatured?: true
    isActive?: true
    date?: true
    location?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConferenceMaxAggregateInputType = {
    id?: true
    title?: true
    shortTitle?: true
    theme?: true
    startDate?: true
    endDate?: true
    venue?: true
    country?: true
    about?: true
    websiteUrl?: true
    contactEmail?: true
    imageUrl?: true
    brochureUrl?: true
    organizingCommittee?: true
    keynoteSpeakers?: true
    editorialBoard?: true
    tracks?: true
    keywords?: true
    submissionInstructions?: true
    submissionStartDate?: true
    abstractDeadline?: true
    fullPaperDeadline?: true
    registrationDeadline?: true
    peerReviewMethod?: true
    color?: true
    order?: true
    isFeatured?: true
    isActive?: true
    date?: true
    location?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConferenceCountAggregateInputType = {
    id?: true
    title?: true
    shortTitle?: true
    theme?: true
    startDate?: true
    endDate?: true
    venue?: true
    country?: true
    modes?: true
    about?: true
    websiteUrl?: true
    contactEmail?: true
    imageUrl?: true
    brochureUrl?: true
    organizingCommittee?: true
    keynoteSpeakers?: true
    editorialBoard?: true
    tracks?: true
    keywords?: true
    submissionInstructions?: true
    submissionStartDate?: true
    abstractDeadline?: true
    fullPaperDeadline?: true
    registrationDeadline?: true
    paperCategories?: true
    peerReviewMethod?: true
    color?: true
    order?: true
    isFeatured?: true
    isActive?: true
    date?: true
    location?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conference to aggregate.
     */
    where?: ConferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conferences to fetch.
     */
    orderBy?: ConferenceOrderByWithRelationInput | ConferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conferences
    **/
    _count?: true | ConferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConferenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConferenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConferenceMaxAggregateInputType
  }

  export type GetConferenceAggregateType<T extends ConferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateConference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConference[P]>
      : GetScalarType<T[P], AggregateConference[P]>
  }




  export type ConferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConferenceWhereInput
    orderBy?: ConferenceOrderByWithAggregationInput | ConferenceOrderByWithAggregationInput[]
    by: ConferenceScalarFieldEnum[] | ConferenceScalarFieldEnum
    having?: ConferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConferenceCountAggregateInputType | true
    _avg?: ConferenceAvgAggregateInputType
    _sum?: ConferenceSumAggregateInputType
    _min?: ConferenceMinAggregateInputType
    _max?: ConferenceMaxAggregateInputType
  }

  export type ConferenceGroupByOutputType = {
    id: number
    title: string
    shortTitle: string | null
    theme: string | null
    startDate: string | null
    endDate: string | null
    venue: string | null
    country: string | null
    modes: JsonValue | null
    about: string | null
    websiteUrl: string | null
    contactEmail: string | null
    imageUrl: string | null
    brochureUrl: string | null
    organizingCommittee: string | null
    keynoteSpeakers: string | null
    editorialBoard: string | null
    tracks: string | null
    keywords: string | null
    submissionInstructions: string | null
    submissionStartDate: string | null
    abstractDeadline: string | null
    fullPaperDeadline: string | null
    registrationDeadline: string | null
    paperCategories: JsonValue | null
    peerReviewMethod: string | null
    color: string | null
    order: number
    isFeatured: boolean
    isActive: boolean
    date: string | null
    location: string | null
    status: string | null
    createdAt: Date
    updatedAt: Date
    _count: ConferenceCountAggregateOutputType | null
    _avg: ConferenceAvgAggregateOutputType | null
    _sum: ConferenceSumAggregateOutputType | null
    _min: ConferenceMinAggregateOutputType | null
    _max: ConferenceMaxAggregateOutputType | null
  }

  type GetConferenceGroupByPayload<T extends ConferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConferenceGroupByOutputType[P]>
            : GetScalarType<T[P], ConferenceGroupByOutputType[P]>
        }
      >
    >


  export type ConferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    shortTitle?: boolean
    theme?: boolean
    startDate?: boolean
    endDate?: boolean
    venue?: boolean
    country?: boolean
    modes?: boolean
    about?: boolean
    websiteUrl?: boolean
    contactEmail?: boolean
    imageUrl?: boolean
    brochureUrl?: boolean
    organizingCommittee?: boolean
    keynoteSpeakers?: boolean
    editorialBoard?: boolean
    tracks?: boolean
    keywords?: boolean
    submissionInstructions?: boolean
    submissionStartDate?: boolean
    abstractDeadline?: boolean
    fullPaperDeadline?: boolean
    registrationDeadline?: boolean
    paperCategories?: boolean
    peerReviewMethod?: boolean
    color?: boolean
    order?: boolean
    isFeatured?: boolean
    isActive?: boolean
    date?: boolean
    location?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["conference"]>



  export type ConferenceSelectScalar = {
    id?: boolean
    title?: boolean
    shortTitle?: boolean
    theme?: boolean
    startDate?: boolean
    endDate?: boolean
    venue?: boolean
    country?: boolean
    modes?: boolean
    about?: boolean
    websiteUrl?: boolean
    contactEmail?: boolean
    imageUrl?: boolean
    brochureUrl?: boolean
    organizingCommittee?: boolean
    keynoteSpeakers?: boolean
    editorialBoard?: boolean
    tracks?: boolean
    keywords?: boolean
    submissionInstructions?: boolean
    submissionStartDate?: boolean
    abstractDeadline?: boolean
    fullPaperDeadline?: boolean
    registrationDeadline?: boolean
    paperCategories?: boolean
    peerReviewMethod?: boolean
    color?: boolean
    order?: boolean
    isFeatured?: boolean
    isActive?: boolean
    date?: boolean
    location?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "shortTitle" | "theme" | "startDate" | "endDate" | "venue" | "country" | "modes" | "about" | "websiteUrl" | "contactEmail" | "imageUrl" | "brochureUrl" | "organizingCommittee" | "keynoteSpeakers" | "editorialBoard" | "tracks" | "keywords" | "submissionInstructions" | "submissionStartDate" | "abstractDeadline" | "fullPaperDeadline" | "registrationDeadline" | "paperCategories" | "peerReviewMethod" | "color" | "order" | "isFeatured" | "isActive" | "date" | "location" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["conference"]>

  export type $ConferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conference"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      shortTitle: string | null
      theme: string | null
      startDate: string | null
      endDate: string | null
      venue: string | null
      country: string | null
      modes: Prisma.JsonValue | null
      about: string | null
      websiteUrl: string | null
      contactEmail: string | null
      imageUrl: string | null
      brochureUrl: string | null
      organizingCommittee: string | null
      keynoteSpeakers: string | null
      editorialBoard: string | null
      tracks: string | null
      keywords: string | null
      submissionInstructions: string | null
      submissionStartDate: string | null
      abstractDeadline: string | null
      fullPaperDeadline: string | null
      registrationDeadline: string | null
      paperCategories: Prisma.JsonValue | null
      peerReviewMethod: string | null
      color: string | null
      order: number
      isFeatured: boolean
      isActive: boolean
      date: string | null
      location: string | null
      status: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["conference"]>
    composites: {}
  }

  type ConferenceGetPayload<S extends boolean | null | undefined | ConferenceDefaultArgs> = $Result.GetResult<Prisma.$ConferencePayload, S>

  type ConferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConferenceCountAggregateInputType | true
    }

  export interface ConferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conference'], meta: { name: 'Conference' } }
    /**
     * Find zero or one Conference that matches the filter.
     * @param {ConferenceFindUniqueArgs} args - Arguments to find a Conference
     * @example
     * // Get one Conference
     * const conference = await prisma.conference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConferenceFindUniqueArgs>(args: SelectSubset<T, ConferenceFindUniqueArgs<ExtArgs>>): Prisma__ConferenceClient<$Result.GetResult<Prisma.$ConferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConferenceFindUniqueOrThrowArgs} args - Arguments to find a Conference
     * @example
     * // Get one Conference
     * const conference = await prisma.conference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, ConferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConferenceClient<$Result.GetResult<Prisma.$ConferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConferenceFindFirstArgs} args - Arguments to find a Conference
     * @example
     * // Get one Conference
     * const conference = await prisma.conference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConferenceFindFirstArgs>(args?: SelectSubset<T, ConferenceFindFirstArgs<ExtArgs>>): Prisma__ConferenceClient<$Result.GetResult<Prisma.$ConferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConferenceFindFirstOrThrowArgs} args - Arguments to find a Conference
     * @example
     * // Get one Conference
     * const conference = await prisma.conference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, ConferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConferenceClient<$Result.GetResult<Prisma.$ConferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conferences
     * const conferences = await prisma.conference.findMany()
     * 
     * // Get first 10 Conferences
     * const conferences = await prisma.conference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conferenceWithIdOnly = await prisma.conference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConferenceFindManyArgs>(args?: SelectSubset<T, ConferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conference.
     * @param {ConferenceCreateArgs} args - Arguments to create a Conference.
     * @example
     * // Create one Conference
     * const Conference = await prisma.conference.create({
     *   data: {
     *     // ... data to create a Conference
     *   }
     * })
     * 
     */
    create<T extends ConferenceCreateArgs>(args: SelectSubset<T, ConferenceCreateArgs<ExtArgs>>): Prisma__ConferenceClient<$Result.GetResult<Prisma.$ConferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conferences.
     * @param {ConferenceCreateManyArgs} args - Arguments to create many Conferences.
     * @example
     * // Create many Conferences
     * const conference = await prisma.conference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConferenceCreateManyArgs>(args?: SelectSubset<T, ConferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Conference.
     * @param {ConferenceDeleteArgs} args - Arguments to delete one Conference.
     * @example
     * // Delete one Conference
     * const Conference = await prisma.conference.delete({
     *   where: {
     *     // ... filter to delete one Conference
     *   }
     * })
     * 
     */
    delete<T extends ConferenceDeleteArgs>(args: SelectSubset<T, ConferenceDeleteArgs<ExtArgs>>): Prisma__ConferenceClient<$Result.GetResult<Prisma.$ConferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conference.
     * @param {ConferenceUpdateArgs} args - Arguments to update one Conference.
     * @example
     * // Update one Conference
     * const conference = await prisma.conference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConferenceUpdateArgs>(args: SelectSubset<T, ConferenceUpdateArgs<ExtArgs>>): Prisma__ConferenceClient<$Result.GetResult<Prisma.$ConferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conferences.
     * @param {ConferenceDeleteManyArgs} args - Arguments to filter Conferences to delete.
     * @example
     * // Delete a few Conferences
     * const { count } = await prisma.conference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConferenceDeleteManyArgs>(args?: SelectSubset<T, ConferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conferences
     * const conference = await prisma.conference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConferenceUpdateManyArgs>(args: SelectSubset<T, ConferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Conference.
     * @param {ConferenceUpsertArgs} args - Arguments to update or create a Conference.
     * @example
     * // Update or create a Conference
     * const conference = await prisma.conference.upsert({
     *   create: {
     *     // ... data to create a Conference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conference we want to update
     *   }
     * })
     */
    upsert<T extends ConferenceUpsertArgs>(args: SelectSubset<T, ConferenceUpsertArgs<ExtArgs>>): Prisma__ConferenceClient<$Result.GetResult<Prisma.$ConferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConferenceCountArgs} args - Arguments to filter Conferences to count.
     * @example
     * // Count the number of Conferences
     * const count = await prisma.conference.count({
     *   where: {
     *     // ... the filter for the Conferences we want to count
     *   }
     * })
    **/
    count<T extends ConferenceCountArgs>(
      args?: Subset<T, ConferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConferenceAggregateArgs>(args: Subset<T, ConferenceAggregateArgs>): Prisma.PrismaPromise<GetConferenceAggregateType<T>>

    /**
     * Group by Conference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConferenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConferenceGroupByArgs['orderBy'] }
        : { orderBy?: ConferenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conference model
   */
  readonly fields: ConferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Conference model
   */
  interface ConferenceFieldRefs {
    readonly id: FieldRef<"Conference", 'Int'>
    readonly title: FieldRef<"Conference", 'String'>
    readonly shortTitle: FieldRef<"Conference", 'String'>
    readonly theme: FieldRef<"Conference", 'String'>
    readonly startDate: FieldRef<"Conference", 'String'>
    readonly endDate: FieldRef<"Conference", 'String'>
    readonly venue: FieldRef<"Conference", 'String'>
    readonly country: FieldRef<"Conference", 'String'>
    readonly modes: FieldRef<"Conference", 'Json'>
    readonly about: FieldRef<"Conference", 'String'>
    readonly websiteUrl: FieldRef<"Conference", 'String'>
    readonly contactEmail: FieldRef<"Conference", 'String'>
    readonly imageUrl: FieldRef<"Conference", 'String'>
    readonly brochureUrl: FieldRef<"Conference", 'String'>
    readonly organizingCommittee: FieldRef<"Conference", 'String'>
    readonly keynoteSpeakers: FieldRef<"Conference", 'String'>
    readonly editorialBoard: FieldRef<"Conference", 'String'>
    readonly tracks: FieldRef<"Conference", 'String'>
    readonly keywords: FieldRef<"Conference", 'String'>
    readonly submissionInstructions: FieldRef<"Conference", 'String'>
    readonly submissionStartDate: FieldRef<"Conference", 'String'>
    readonly abstractDeadline: FieldRef<"Conference", 'String'>
    readonly fullPaperDeadline: FieldRef<"Conference", 'String'>
    readonly registrationDeadline: FieldRef<"Conference", 'String'>
    readonly paperCategories: FieldRef<"Conference", 'Json'>
    readonly peerReviewMethod: FieldRef<"Conference", 'String'>
    readonly color: FieldRef<"Conference", 'String'>
    readonly order: FieldRef<"Conference", 'Int'>
    readonly isFeatured: FieldRef<"Conference", 'Boolean'>
    readonly isActive: FieldRef<"Conference", 'Boolean'>
    readonly date: FieldRef<"Conference", 'String'>
    readonly location: FieldRef<"Conference", 'String'>
    readonly status: FieldRef<"Conference", 'String'>
    readonly createdAt: FieldRef<"Conference", 'DateTime'>
    readonly updatedAt: FieldRef<"Conference", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Conference findUnique
   */
  export type ConferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conference
     */
    select?: ConferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conference
     */
    omit?: ConferenceOmit<ExtArgs> | null
    /**
     * Filter, which Conference to fetch.
     */
    where: ConferenceWhereUniqueInput
  }

  /**
   * Conference findUniqueOrThrow
   */
  export type ConferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conference
     */
    select?: ConferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conference
     */
    omit?: ConferenceOmit<ExtArgs> | null
    /**
     * Filter, which Conference to fetch.
     */
    where: ConferenceWhereUniqueInput
  }

  /**
   * Conference findFirst
   */
  export type ConferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conference
     */
    select?: ConferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conference
     */
    omit?: ConferenceOmit<ExtArgs> | null
    /**
     * Filter, which Conference to fetch.
     */
    where?: ConferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conferences to fetch.
     */
    orderBy?: ConferenceOrderByWithRelationInput | ConferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conferences.
     */
    cursor?: ConferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conferences.
     */
    distinct?: ConferenceScalarFieldEnum | ConferenceScalarFieldEnum[]
  }

  /**
   * Conference findFirstOrThrow
   */
  export type ConferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conference
     */
    select?: ConferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conference
     */
    omit?: ConferenceOmit<ExtArgs> | null
    /**
     * Filter, which Conference to fetch.
     */
    where?: ConferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conferences to fetch.
     */
    orderBy?: ConferenceOrderByWithRelationInput | ConferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conferences.
     */
    cursor?: ConferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conferences.
     */
    distinct?: ConferenceScalarFieldEnum | ConferenceScalarFieldEnum[]
  }

  /**
   * Conference findMany
   */
  export type ConferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conference
     */
    select?: ConferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conference
     */
    omit?: ConferenceOmit<ExtArgs> | null
    /**
     * Filter, which Conferences to fetch.
     */
    where?: ConferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conferences to fetch.
     */
    orderBy?: ConferenceOrderByWithRelationInput | ConferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conferences.
     */
    cursor?: ConferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conferences.
     */
    distinct?: ConferenceScalarFieldEnum | ConferenceScalarFieldEnum[]
  }

  /**
   * Conference create
   */
  export type ConferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conference
     */
    select?: ConferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conference
     */
    omit?: ConferenceOmit<ExtArgs> | null
    /**
     * The data needed to create a Conference.
     */
    data: XOR<ConferenceCreateInput, ConferenceUncheckedCreateInput>
  }

  /**
   * Conference createMany
   */
  export type ConferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conferences.
     */
    data: ConferenceCreateManyInput | ConferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conference update
   */
  export type ConferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conference
     */
    select?: ConferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conference
     */
    omit?: ConferenceOmit<ExtArgs> | null
    /**
     * The data needed to update a Conference.
     */
    data: XOR<ConferenceUpdateInput, ConferenceUncheckedUpdateInput>
    /**
     * Choose, which Conference to update.
     */
    where: ConferenceWhereUniqueInput
  }

  /**
   * Conference updateMany
   */
  export type ConferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conferences.
     */
    data: XOR<ConferenceUpdateManyMutationInput, ConferenceUncheckedUpdateManyInput>
    /**
     * Filter which Conferences to update
     */
    where?: ConferenceWhereInput
    /**
     * Limit how many Conferences to update.
     */
    limit?: number
  }

  /**
   * Conference upsert
   */
  export type ConferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conference
     */
    select?: ConferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conference
     */
    omit?: ConferenceOmit<ExtArgs> | null
    /**
     * The filter to search for the Conference to update in case it exists.
     */
    where: ConferenceWhereUniqueInput
    /**
     * In case the Conference found by the `where` argument doesn't exist, create a new Conference with this data.
     */
    create: XOR<ConferenceCreateInput, ConferenceUncheckedCreateInput>
    /**
     * In case the Conference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConferenceUpdateInput, ConferenceUncheckedUpdateInput>
  }

  /**
   * Conference delete
   */
  export type ConferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conference
     */
    select?: ConferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conference
     */
    omit?: ConferenceOmit<ExtArgs> | null
    /**
     * Filter which Conference to delete.
     */
    where: ConferenceWhereUniqueInput
  }

  /**
   * Conference deleteMany
   */
  export type ConferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conferences to delete
     */
    where?: ConferenceWhereInput
    /**
     * Limit how many Conferences to delete.
     */
    limit?: number
  }

  /**
   * Conference without action
   */
  export type ConferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conference
     */
    select?: ConferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conference
     */
    omit?: ConferenceOmit<ExtArgs> | null
  }


  /**
   * Model Inquiry
   */

  export type AggregateInquiry = {
    _count: InquiryCountAggregateOutputType | null
    _avg: InquiryAvgAggregateOutputType | null
    _sum: InquirySumAggregateOutputType | null
    _min: InquiryMinAggregateOutputType | null
    _max: InquiryMaxAggregateOutputType | null
  }

  export type InquiryAvgAggregateOutputType = {
    id: number | null
  }

  export type InquirySumAggregateOutputType = {
    id: number | null
  }

  export type InquiryMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    institution: string | null
    subject: string | null
    purpose: string | null
    tier: string | null
    message: string | null
    aboutDetails: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InquiryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    institution: string | null
    subject: string | null
    purpose: string | null
    tier: string | null
    message: string | null
    aboutDetails: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InquiryCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    institution: number
    subject: number
    purpose: number
    tier: number
    message: number
    aboutDetails: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InquiryAvgAggregateInputType = {
    id?: true
  }

  export type InquirySumAggregateInputType = {
    id?: true
  }

  export type InquiryMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    institution?: true
    subject?: true
    purpose?: true
    tier?: true
    message?: true
    aboutDetails?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InquiryMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    institution?: true
    subject?: true
    purpose?: true
    tier?: true
    message?: true
    aboutDetails?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InquiryCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    institution?: true
    subject?: true
    purpose?: true
    tier?: true
    message?: true
    aboutDetails?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InquiryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inquiry to aggregate.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inquiries
    **/
    _count?: true | InquiryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InquiryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InquirySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InquiryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InquiryMaxAggregateInputType
  }

  export type GetInquiryAggregateType<T extends InquiryAggregateArgs> = {
        [P in keyof T & keyof AggregateInquiry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInquiry[P]>
      : GetScalarType<T[P], AggregateInquiry[P]>
  }




  export type InquiryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InquiryWhereInput
    orderBy?: InquiryOrderByWithAggregationInput | InquiryOrderByWithAggregationInput[]
    by: InquiryScalarFieldEnum[] | InquiryScalarFieldEnum
    having?: InquiryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InquiryCountAggregateInputType | true
    _avg?: InquiryAvgAggregateInputType
    _sum?: InquirySumAggregateInputType
    _min?: InquiryMinAggregateInputType
    _max?: InquiryMaxAggregateInputType
  }

  export type InquiryGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string | null
    institution: string | null
    subject: string | null
    purpose: string | null
    tier: string | null
    message: string
    aboutDetails: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: InquiryCountAggregateOutputType | null
    _avg: InquiryAvgAggregateOutputType | null
    _sum: InquirySumAggregateOutputType | null
    _min: InquiryMinAggregateOutputType | null
    _max: InquiryMaxAggregateOutputType | null
  }

  type GetInquiryGroupByPayload<T extends InquiryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InquiryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InquiryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InquiryGroupByOutputType[P]>
            : GetScalarType<T[P], InquiryGroupByOutputType[P]>
        }
      >
    >


  export type InquirySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    institution?: boolean
    subject?: boolean
    purpose?: boolean
    tier?: boolean
    message?: boolean
    aboutDetails?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["inquiry"]>



  export type InquirySelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    institution?: boolean
    subject?: boolean
    purpose?: boolean
    tier?: boolean
    message?: boolean
    aboutDetails?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InquiryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "institution" | "subject" | "purpose" | "tier" | "message" | "aboutDetails" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["inquiry"]>

  export type $InquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inquiry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string | null
      institution: string | null
      subject: string | null
      purpose: string | null
      tier: string | null
      message: string
      aboutDetails: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["inquiry"]>
    composites: {}
  }

  type InquiryGetPayload<S extends boolean | null | undefined | InquiryDefaultArgs> = $Result.GetResult<Prisma.$InquiryPayload, S>

  type InquiryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InquiryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InquiryCountAggregateInputType | true
    }

  export interface InquiryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inquiry'], meta: { name: 'Inquiry' } }
    /**
     * Find zero or one Inquiry that matches the filter.
     * @param {InquiryFindUniqueArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InquiryFindUniqueArgs>(args: SelectSubset<T, InquiryFindUniqueArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inquiry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InquiryFindUniqueOrThrowArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InquiryFindUniqueOrThrowArgs>(args: SelectSubset<T, InquiryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inquiry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindFirstArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InquiryFindFirstArgs>(args?: SelectSubset<T, InquiryFindFirstArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inquiry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindFirstOrThrowArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InquiryFindFirstOrThrowArgs>(args?: SelectSubset<T, InquiryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inquiries
     * const inquiries = await prisma.inquiry.findMany()
     * 
     * // Get first 10 Inquiries
     * const inquiries = await prisma.inquiry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inquiryWithIdOnly = await prisma.inquiry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InquiryFindManyArgs>(args?: SelectSubset<T, InquiryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inquiry.
     * @param {InquiryCreateArgs} args - Arguments to create a Inquiry.
     * @example
     * // Create one Inquiry
     * const Inquiry = await prisma.inquiry.create({
     *   data: {
     *     // ... data to create a Inquiry
     *   }
     * })
     * 
     */
    create<T extends InquiryCreateArgs>(args: SelectSubset<T, InquiryCreateArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inquiries.
     * @param {InquiryCreateManyArgs} args - Arguments to create many Inquiries.
     * @example
     * // Create many Inquiries
     * const inquiry = await prisma.inquiry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InquiryCreateManyArgs>(args?: SelectSubset<T, InquiryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inquiry.
     * @param {InquiryDeleteArgs} args - Arguments to delete one Inquiry.
     * @example
     * // Delete one Inquiry
     * const Inquiry = await prisma.inquiry.delete({
     *   where: {
     *     // ... filter to delete one Inquiry
     *   }
     * })
     * 
     */
    delete<T extends InquiryDeleteArgs>(args: SelectSubset<T, InquiryDeleteArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inquiry.
     * @param {InquiryUpdateArgs} args - Arguments to update one Inquiry.
     * @example
     * // Update one Inquiry
     * const inquiry = await prisma.inquiry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InquiryUpdateArgs>(args: SelectSubset<T, InquiryUpdateArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inquiries.
     * @param {InquiryDeleteManyArgs} args - Arguments to filter Inquiries to delete.
     * @example
     * // Delete a few Inquiries
     * const { count } = await prisma.inquiry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InquiryDeleteManyArgs>(args?: SelectSubset<T, InquiryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inquiries
     * const inquiry = await prisma.inquiry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InquiryUpdateManyArgs>(args: SelectSubset<T, InquiryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inquiry.
     * @param {InquiryUpsertArgs} args - Arguments to update or create a Inquiry.
     * @example
     * // Update or create a Inquiry
     * const inquiry = await prisma.inquiry.upsert({
     *   create: {
     *     // ... data to create a Inquiry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inquiry we want to update
     *   }
     * })
     */
    upsert<T extends InquiryUpsertArgs>(args: SelectSubset<T, InquiryUpsertArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryCountArgs} args - Arguments to filter Inquiries to count.
     * @example
     * // Count the number of Inquiries
     * const count = await prisma.inquiry.count({
     *   where: {
     *     // ... the filter for the Inquiries we want to count
     *   }
     * })
    **/
    count<T extends InquiryCountArgs>(
      args?: Subset<T, InquiryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InquiryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InquiryAggregateArgs>(args: Subset<T, InquiryAggregateArgs>): Prisma.PrismaPromise<GetInquiryAggregateType<T>>

    /**
     * Group by Inquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InquiryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InquiryGroupByArgs['orderBy'] }
        : { orderBy?: InquiryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InquiryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInquiryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inquiry model
   */
  readonly fields: InquiryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inquiry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InquiryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inquiry model
   */
  interface InquiryFieldRefs {
    readonly id: FieldRef<"Inquiry", 'Int'>
    readonly name: FieldRef<"Inquiry", 'String'>
    readonly email: FieldRef<"Inquiry", 'String'>
    readonly phone: FieldRef<"Inquiry", 'String'>
    readonly institution: FieldRef<"Inquiry", 'String'>
    readonly subject: FieldRef<"Inquiry", 'String'>
    readonly purpose: FieldRef<"Inquiry", 'String'>
    readonly tier: FieldRef<"Inquiry", 'String'>
    readonly message: FieldRef<"Inquiry", 'String'>
    readonly aboutDetails: FieldRef<"Inquiry", 'String'>
    readonly status: FieldRef<"Inquiry", 'String'>
    readonly createdAt: FieldRef<"Inquiry", 'DateTime'>
    readonly updatedAt: FieldRef<"Inquiry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Inquiry findUnique
   */
  export type InquiryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry findUniqueOrThrow
   */
  export type InquiryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry findFirst
   */
  export type InquiryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inquiries.
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inquiries.
     */
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * Inquiry findFirstOrThrow
   */
  export type InquiryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inquiries.
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inquiries.
     */
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * Inquiry findMany
   */
  export type InquiryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Filter, which Inquiries to fetch.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inquiries.
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inquiries.
     */
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * Inquiry create
   */
  export type InquiryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * The data needed to create a Inquiry.
     */
    data: XOR<InquiryCreateInput, InquiryUncheckedCreateInput>
  }

  /**
   * Inquiry createMany
   */
  export type InquiryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inquiries.
     */
    data: InquiryCreateManyInput | InquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inquiry update
   */
  export type InquiryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * The data needed to update a Inquiry.
     */
    data: XOR<InquiryUpdateInput, InquiryUncheckedUpdateInput>
    /**
     * Choose, which Inquiry to update.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry updateMany
   */
  export type InquiryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inquiries.
     */
    data: XOR<InquiryUpdateManyMutationInput, InquiryUncheckedUpdateManyInput>
    /**
     * Filter which Inquiries to update
     */
    where?: InquiryWhereInput
    /**
     * Limit how many Inquiries to update.
     */
    limit?: number
  }

  /**
   * Inquiry upsert
   */
  export type InquiryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * The filter to search for the Inquiry to update in case it exists.
     */
    where: InquiryWhereUniqueInput
    /**
     * In case the Inquiry found by the `where` argument doesn't exist, create a new Inquiry with this data.
     */
    create: XOR<InquiryCreateInput, InquiryUncheckedCreateInput>
    /**
     * In case the Inquiry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InquiryUpdateInput, InquiryUncheckedUpdateInput>
  }

  /**
   * Inquiry delete
   */
  export type InquiryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Filter which Inquiry to delete.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry deleteMany
   */
  export type InquiryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inquiries to delete
     */
    where?: InquiryWhereInput
    /**
     * Limit how many Inquiries to delete.
     */
    limit?: number
  }

  /**
   * Inquiry without action
   */
  export type InquiryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type EventSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type EventMinAggregateOutputType = {
    id: number | null
    type: string | null
    title: string | null
    description: string | null
    speaker: string | null
    instructor: string | null
    date: string | null
    time: string | null
    location: string | null
    link: string | null
    status: string | null
    color: string | null
    order: number | null
    isFeatured: boolean | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: number | null
    type: string | null
    title: string | null
    description: string | null
    speaker: string | null
    instructor: string | null
    date: string | null
    time: string | null
    location: string | null
    link: string | null
    status: string | null
    color: string | null
    order: number | null
    isFeatured: boolean | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    type: number
    title: number
    description: number
    speaker: number
    instructor: number
    date: number
    time: number
    location: number
    link: number
    status: number
    color: number
    order: number
    isFeatured: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type EventSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    speaker?: true
    instructor?: true
    date?: true
    time?: true
    location?: true
    link?: true
    status?: true
    color?: true
    order?: true
    isFeatured?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    speaker?: true
    instructor?: true
    date?: true
    time?: true
    location?: true
    link?: true
    status?: true
    color?: true
    order?: true
    isFeatured?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    speaker?: true
    instructor?: true
    date?: true
    time?: true
    location?: true
    link?: true
    status?: true
    color?: true
    order?: true
    isFeatured?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: number
    type: string
    title: string
    description: string | null
    speaker: string | null
    instructor: string | null
    date: string | null
    time: string | null
    location: string | null
    link: string | null
    status: string | null
    color: string | null
    order: number
    isFeatured: boolean
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    speaker?: boolean
    instructor?: boolean
    date?: boolean
    time?: boolean
    location?: boolean
    link?: boolean
    status?: boolean
    color?: boolean
    order?: boolean
    isFeatured?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event"]>



  export type EventSelectScalar = {
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    speaker?: boolean
    instructor?: boolean
    date?: boolean
    time?: boolean
    location?: boolean
    link?: boolean
    status?: boolean
    color?: boolean
    order?: boolean
    isFeatured?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "title" | "description" | "speaker" | "instructor" | "date" | "time" | "location" | "link" | "status" | "color" | "order" | "isFeatured" | "imageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["event"]>

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      title: string
      description: string | null
      speaker: string | null
      instructor: string | null
      date: string | null
      time: string | null
      location: string | null
      link: string | null
      status: string | null
      color: string | null
      order: number
      isFeatured: boolean
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'Int'>
    readonly type: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly speaker: FieldRef<"Event", 'String'>
    readonly instructor: FieldRef<"Event", 'String'>
    readonly date: FieldRef<"Event", 'String'>
    readonly time: FieldRef<"Event", 'String'>
    readonly location: FieldRef<"Event", 'String'>
    readonly link: FieldRef<"Event", 'String'>
    readonly status: FieldRef<"Event", 'String'>
    readonly color: FieldRef<"Event", 'String'>
    readonly order: FieldRef<"Event", 'Int'>
    readonly isFeatured: FieldRef<"Event", 'Boolean'>
    readonly imageUrl: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
  }


  /**
   * Model PricingPlan
   */

  export type AggregatePricingPlan = {
    _count: PricingPlanCountAggregateOutputType | null
    _avg: PricingPlanAvgAggregateOutputType | null
    _sum: PricingPlanSumAggregateOutputType | null
    _min: PricingPlanMinAggregateOutputType | null
    _max: PricingPlanMaxAggregateOutputType | null
  }

  export type PricingPlanAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type PricingPlanSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type PricingPlanMinAggregateOutputType = {
    id: number | null
    name: string | null
    priceINR: string | null
    priceUSD: string | null
    description: string | null
    cta: string | null
    highlight: boolean | null
    tag: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PricingPlanMaxAggregateOutputType = {
    id: number | null
    name: string | null
    priceINR: string | null
    priceUSD: string | null
    description: string | null
    cta: string | null
    highlight: boolean | null
    tag: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PricingPlanCountAggregateOutputType = {
    id: number
    name: number
    priceINR: number
    priceUSD: number
    description: number
    features: number
    cta: number
    highlight: number
    tag: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PricingPlanAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type PricingPlanSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type PricingPlanMinAggregateInputType = {
    id?: true
    name?: true
    priceINR?: true
    priceUSD?: true
    description?: true
    cta?: true
    highlight?: true
    tag?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PricingPlanMaxAggregateInputType = {
    id?: true
    name?: true
    priceINR?: true
    priceUSD?: true
    description?: true
    cta?: true
    highlight?: true
    tag?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PricingPlanCountAggregateInputType = {
    id?: true
    name?: true
    priceINR?: true
    priceUSD?: true
    description?: true
    features?: true
    cta?: true
    highlight?: true
    tag?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PricingPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingPlan to aggregate.
     */
    where?: PricingPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingPlans to fetch.
     */
    orderBy?: PricingPlanOrderByWithRelationInput | PricingPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PricingPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PricingPlans
    **/
    _count?: true | PricingPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PricingPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PricingPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PricingPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PricingPlanMaxAggregateInputType
  }

  export type GetPricingPlanAggregateType<T extends PricingPlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePricingPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePricingPlan[P]>
      : GetScalarType<T[P], AggregatePricingPlan[P]>
  }




  export type PricingPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingPlanWhereInput
    orderBy?: PricingPlanOrderByWithAggregationInput | PricingPlanOrderByWithAggregationInput[]
    by: PricingPlanScalarFieldEnum[] | PricingPlanScalarFieldEnum
    having?: PricingPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PricingPlanCountAggregateInputType | true
    _avg?: PricingPlanAvgAggregateInputType
    _sum?: PricingPlanSumAggregateInputType
    _min?: PricingPlanMinAggregateInputType
    _max?: PricingPlanMaxAggregateInputType
  }

  export type PricingPlanGroupByOutputType = {
    id: number
    name: string
    priceINR: string
    priceUSD: string
    description: string | null
    features: JsonValue | null
    cta: string | null
    highlight: boolean
    tag: string | null
    order: number
    createdAt: Date
    updatedAt: Date
    _count: PricingPlanCountAggregateOutputType | null
    _avg: PricingPlanAvgAggregateOutputType | null
    _sum: PricingPlanSumAggregateOutputType | null
    _min: PricingPlanMinAggregateOutputType | null
    _max: PricingPlanMaxAggregateOutputType | null
  }

  type GetPricingPlanGroupByPayload<T extends PricingPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PricingPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PricingPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PricingPlanGroupByOutputType[P]>
            : GetScalarType<T[P], PricingPlanGroupByOutputType[P]>
        }
      >
    >


  export type PricingPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    priceINR?: boolean
    priceUSD?: boolean
    description?: boolean
    features?: boolean
    cta?: boolean
    highlight?: boolean
    tag?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pricingPlan"]>



  export type PricingPlanSelectScalar = {
    id?: boolean
    name?: boolean
    priceINR?: boolean
    priceUSD?: boolean
    description?: boolean
    features?: boolean
    cta?: boolean
    highlight?: boolean
    tag?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PricingPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "priceINR" | "priceUSD" | "description" | "features" | "cta" | "highlight" | "tag" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["pricingPlan"]>

  export type $PricingPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PricingPlan"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      priceINR: string
      priceUSD: string
      description: string | null
      features: Prisma.JsonValue | null
      cta: string | null
      highlight: boolean
      tag: string | null
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pricingPlan"]>
    composites: {}
  }

  type PricingPlanGetPayload<S extends boolean | null | undefined | PricingPlanDefaultArgs> = $Result.GetResult<Prisma.$PricingPlanPayload, S>

  type PricingPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PricingPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PricingPlanCountAggregateInputType | true
    }

  export interface PricingPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PricingPlan'], meta: { name: 'PricingPlan' } }
    /**
     * Find zero or one PricingPlan that matches the filter.
     * @param {PricingPlanFindUniqueArgs} args - Arguments to find a PricingPlan
     * @example
     * // Get one PricingPlan
     * const pricingPlan = await prisma.pricingPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PricingPlanFindUniqueArgs>(args: SelectSubset<T, PricingPlanFindUniqueArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PricingPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PricingPlanFindUniqueOrThrowArgs} args - Arguments to find a PricingPlan
     * @example
     * // Get one PricingPlan
     * const pricingPlan = await prisma.pricingPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PricingPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, PricingPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PricingPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPlanFindFirstArgs} args - Arguments to find a PricingPlan
     * @example
     * // Get one PricingPlan
     * const pricingPlan = await prisma.pricingPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PricingPlanFindFirstArgs>(args?: SelectSubset<T, PricingPlanFindFirstArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PricingPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPlanFindFirstOrThrowArgs} args - Arguments to find a PricingPlan
     * @example
     * // Get one PricingPlan
     * const pricingPlan = await prisma.pricingPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PricingPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, PricingPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PricingPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PricingPlans
     * const pricingPlans = await prisma.pricingPlan.findMany()
     * 
     * // Get first 10 PricingPlans
     * const pricingPlans = await prisma.pricingPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pricingPlanWithIdOnly = await prisma.pricingPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PricingPlanFindManyArgs>(args?: SelectSubset<T, PricingPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PricingPlan.
     * @param {PricingPlanCreateArgs} args - Arguments to create a PricingPlan.
     * @example
     * // Create one PricingPlan
     * const PricingPlan = await prisma.pricingPlan.create({
     *   data: {
     *     // ... data to create a PricingPlan
     *   }
     * })
     * 
     */
    create<T extends PricingPlanCreateArgs>(args: SelectSubset<T, PricingPlanCreateArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PricingPlans.
     * @param {PricingPlanCreateManyArgs} args - Arguments to create many PricingPlans.
     * @example
     * // Create many PricingPlans
     * const pricingPlan = await prisma.pricingPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PricingPlanCreateManyArgs>(args?: SelectSubset<T, PricingPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PricingPlan.
     * @param {PricingPlanDeleteArgs} args - Arguments to delete one PricingPlan.
     * @example
     * // Delete one PricingPlan
     * const PricingPlan = await prisma.pricingPlan.delete({
     *   where: {
     *     // ... filter to delete one PricingPlan
     *   }
     * })
     * 
     */
    delete<T extends PricingPlanDeleteArgs>(args: SelectSubset<T, PricingPlanDeleteArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PricingPlan.
     * @param {PricingPlanUpdateArgs} args - Arguments to update one PricingPlan.
     * @example
     * // Update one PricingPlan
     * const pricingPlan = await prisma.pricingPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PricingPlanUpdateArgs>(args: SelectSubset<T, PricingPlanUpdateArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PricingPlans.
     * @param {PricingPlanDeleteManyArgs} args - Arguments to filter PricingPlans to delete.
     * @example
     * // Delete a few PricingPlans
     * const { count } = await prisma.pricingPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PricingPlanDeleteManyArgs>(args?: SelectSubset<T, PricingPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PricingPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PricingPlans
     * const pricingPlan = await prisma.pricingPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PricingPlanUpdateManyArgs>(args: SelectSubset<T, PricingPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PricingPlan.
     * @param {PricingPlanUpsertArgs} args - Arguments to update or create a PricingPlan.
     * @example
     * // Update or create a PricingPlan
     * const pricingPlan = await prisma.pricingPlan.upsert({
     *   create: {
     *     // ... data to create a PricingPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PricingPlan we want to update
     *   }
     * })
     */
    upsert<T extends PricingPlanUpsertArgs>(args: SelectSubset<T, PricingPlanUpsertArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PricingPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPlanCountArgs} args - Arguments to filter PricingPlans to count.
     * @example
     * // Count the number of PricingPlans
     * const count = await prisma.pricingPlan.count({
     *   where: {
     *     // ... the filter for the PricingPlans we want to count
     *   }
     * })
    **/
    count<T extends PricingPlanCountArgs>(
      args?: Subset<T, PricingPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PricingPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PricingPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PricingPlanAggregateArgs>(args: Subset<T, PricingPlanAggregateArgs>): Prisma.PrismaPromise<GetPricingPlanAggregateType<T>>

    /**
     * Group by PricingPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PricingPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PricingPlanGroupByArgs['orderBy'] }
        : { orderBy?: PricingPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PricingPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPricingPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PricingPlan model
   */
  readonly fields: PricingPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PricingPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PricingPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PricingPlan model
   */
  interface PricingPlanFieldRefs {
    readonly id: FieldRef<"PricingPlan", 'Int'>
    readonly name: FieldRef<"PricingPlan", 'String'>
    readonly priceINR: FieldRef<"PricingPlan", 'String'>
    readonly priceUSD: FieldRef<"PricingPlan", 'String'>
    readonly description: FieldRef<"PricingPlan", 'String'>
    readonly features: FieldRef<"PricingPlan", 'Json'>
    readonly cta: FieldRef<"PricingPlan", 'String'>
    readonly highlight: FieldRef<"PricingPlan", 'Boolean'>
    readonly tag: FieldRef<"PricingPlan", 'String'>
    readonly order: FieldRef<"PricingPlan", 'Int'>
    readonly createdAt: FieldRef<"PricingPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"PricingPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PricingPlan findUnique
   */
  export type PricingPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * Filter, which PricingPlan to fetch.
     */
    where: PricingPlanWhereUniqueInput
  }

  /**
   * PricingPlan findUniqueOrThrow
   */
  export type PricingPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * Filter, which PricingPlan to fetch.
     */
    where: PricingPlanWhereUniqueInput
  }

  /**
   * PricingPlan findFirst
   */
  export type PricingPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * Filter, which PricingPlan to fetch.
     */
    where?: PricingPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingPlans to fetch.
     */
    orderBy?: PricingPlanOrderByWithRelationInput | PricingPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingPlans.
     */
    cursor?: PricingPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingPlans.
     */
    distinct?: PricingPlanScalarFieldEnum | PricingPlanScalarFieldEnum[]
  }

  /**
   * PricingPlan findFirstOrThrow
   */
  export type PricingPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * Filter, which PricingPlan to fetch.
     */
    where?: PricingPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingPlans to fetch.
     */
    orderBy?: PricingPlanOrderByWithRelationInput | PricingPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingPlans.
     */
    cursor?: PricingPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingPlans.
     */
    distinct?: PricingPlanScalarFieldEnum | PricingPlanScalarFieldEnum[]
  }

  /**
   * PricingPlan findMany
   */
  export type PricingPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * Filter, which PricingPlans to fetch.
     */
    where?: PricingPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingPlans to fetch.
     */
    orderBy?: PricingPlanOrderByWithRelationInput | PricingPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PricingPlans.
     */
    cursor?: PricingPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingPlans.
     */
    distinct?: PricingPlanScalarFieldEnum | PricingPlanScalarFieldEnum[]
  }

  /**
   * PricingPlan create
   */
  export type PricingPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * The data needed to create a PricingPlan.
     */
    data: XOR<PricingPlanCreateInput, PricingPlanUncheckedCreateInput>
  }

  /**
   * PricingPlan createMany
   */
  export type PricingPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PricingPlans.
     */
    data: PricingPlanCreateManyInput | PricingPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PricingPlan update
   */
  export type PricingPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * The data needed to update a PricingPlan.
     */
    data: XOR<PricingPlanUpdateInput, PricingPlanUncheckedUpdateInput>
    /**
     * Choose, which PricingPlan to update.
     */
    where: PricingPlanWhereUniqueInput
  }

  /**
   * PricingPlan updateMany
   */
  export type PricingPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PricingPlans.
     */
    data: XOR<PricingPlanUpdateManyMutationInput, PricingPlanUncheckedUpdateManyInput>
    /**
     * Filter which PricingPlans to update
     */
    where?: PricingPlanWhereInput
    /**
     * Limit how many PricingPlans to update.
     */
    limit?: number
  }

  /**
   * PricingPlan upsert
   */
  export type PricingPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * The filter to search for the PricingPlan to update in case it exists.
     */
    where: PricingPlanWhereUniqueInput
    /**
     * In case the PricingPlan found by the `where` argument doesn't exist, create a new PricingPlan with this data.
     */
    create: XOR<PricingPlanCreateInput, PricingPlanUncheckedCreateInput>
    /**
     * In case the PricingPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PricingPlanUpdateInput, PricingPlanUncheckedUpdateInput>
  }

  /**
   * PricingPlan delete
   */
  export type PricingPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * Filter which PricingPlan to delete.
     */
    where: PricingPlanWhereUniqueInput
  }

  /**
   * PricingPlan deleteMany
   */
  export type PricingPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingPlans to delete
     */
    where?: PricingPlanWhereInput
    /**
     * Limit how many PricingPlans to delete.
     */
    limit?: number
  }

  /**
   * PricingPlan without action
   */
  export type PricingPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string | null
    role: string
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string | null
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly role: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MemberScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    institution: 'institution',
    tier: 'tier',
    status: 'status',
    joinedAt: 'joinedAt',
    updatedAt: 'updatedAt'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const JournalScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    issn: 'issn',
    domain: 'domain',
    indexing: 'indexing',
    link: 'link',
    imageUrl: 'imageUrl',
    isFeatured: 'isFeatured',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JournalScalarFieldEnum = (typeof JournalScalarFieldEnum)[keyof typeof JournalScalarFieldEnum]


  export const MembershipTierScalarFieldEnum: {
    id: 'id',
    name: 'name',
    icon: 'icon',
    priceINR: 'priceINR',
    priceUSD: 'priceUSD',
    description: 'description',
    benefits: 'benefits',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MembershipTierScalarFieldEnum = (typeof MembershipTierScalarFieldEnum)[keyof typeof MembershipTierScalarFieldEnum]


  export const ConferenceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    shortTitle: 'shortTitle',
    theme: 'theme',
    startDate: 'startDate',
    endDate: 'endDate',
    venue: 'venue',
    country: 'country',
    modes: 'modes',
    about: 'about',
    websiteUrl: 'websiteUrl',
    contactEmail: 'contactEmail',
    imageUrl: 'imageUrl',
    brochureUrl: 'brochureUrl',
    organizingCommittee: 'organizingCommittee',
    keynoteSpeakers: 'keynoteSpeakers',
    editorialBoard: 'editorialBoard',
    tracks: 'tracks',
    keywords: 'keywords',
    submissionInstructions: 'submissionInstructions',
    submissionStartDate: 'submissionStartDate',
    abstractDeadline: 'abstractDeadline',
    fullPaperDeadline: 'fullPaperDeadline',
    registrationDeadline: 'registrationDeadline',
    paperCategories: 'paperCategories',
    peerReviewMethod: 'peerReviewMethod',
    color: 'color',
    order: 'order',
    isFeatured: 'isFeatured',
    isActive: 'isActive',
    date: 'date',
    location: 'location',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConferenceScalarFieldEnum = (typeof ConferenceScalarFieldEnum)[keyof typeof ConferenceScalarFieldEnum]


  export const InquiryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    institution: 'institution',
    subject: 'subject',
    purpose: 'purpose',
    tier: 'tier',
    message: 'message',
    aboutDetails: 'aboutDetails',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InquiryScalarFieldEnum = (typeof InquiryScalarFieldEnum)[keyof typeof InquiryScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    type: 'type',
    title: 'title',
    description: 'description',
    speaker: 'speaker',
    instructor: 'instructor',
    date: 'date',
    time: 'time',
    location: 'location',
    link: 'link',
    status: 'status',
    color: 'color',
    order: 'order',
    isFeatured: 'isFeatured',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const PricingPlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    priceINR: 'priceINR',
    priceUSD: 'priceUSD',
    description: 'description',
    features: 'features',
    cta: 'cta',
    highlight: 'highlight',
    tag: 'tag',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PricingPlanScalarFieldEnum = (typeof PricingPlanScalarFieldEnum)[keyof typeof PricingPlanScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const MemberOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    phone: 'phone',
    institution: 'institution',
    tier: 'tier',
    status: 'status'
  };

  export type MemberOrderByRelevanceFieldEnum = (typeof MemberOrderByRelevanceFieldEnum)[keyof typeof MemberOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JournalOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    issn: 'issn',
    domain: 'domain',
    link: 'link',
    imageUrl: 'imageUrl'
  };

  export type JournalOrderByRelevanceFieldEnum = (typeof JournalOrderByRelevanceFieldEnum)[keyof typeof JournalOrderByRelevanceFieldEnum]


  export const MembershipTierOrderByRelevanceFieldEnum: {
    name: 'name',
    icon: 'icon',
    priceINR: 'priceINR',
    priceUSD: 'priceUSD',
    description: 'description'
  };

  export type MembershipTierOrderByRelevanceFieldEnum = (typeof MembershipTierOrderByRelevanceFieldEnum)[keyof typeof MembershipTierOrderByRelevanceFieldEnum]


  export const ConferenceOrderByRelevanceFieldEnum: {
    title: 'title',
    shortTitle: 'shortTitle',
    theme: 'theme',
    startDate: 'startDate',
    endDate: 'endDate',
    venue: 'venue',
    country: 'country',
    about: 'about',
    websiteUrl: 'websiteUrl',
    contactEmail: 'contactEmail',
    imageUrl: 'imageUrl',
    brochureUrl: 'brochureUrl',
    organizingCommittee: 'organizingCommittee',
    keynoteSpeakers: 'keynoteSpeakers',
    editorialBoard: 'editorialBoard',
    tracks: 'tracks',
    keywords: 'keywords',
    submissionInstructions: 'submissionInstructions',
    submissionStartDate: 'submissionStartDate',
    abstractDeadline: 'abstractDeadline',
    fullPaperDeadline: 'fullPaperDeadline',
    registrationDeadline: 'registrationDeadline',
    peerReviewMethod: 'peerReviewMethod',
    color: 'color',
    date: 'date',
    location: 'location',
    status: 'status'
  };

  export type ConferenceOrderByRelevanceFieldEnum = (typeof ConferenceOrderByRelevanceFieldEnum)[keyof typeof ConferenceOrderByRelevanceFieldEnum]


  export const InquiryOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    phone: 'phone',
    institution: 'institution',
    subject: 'subject',
    purpose: 'purpose',
    tier: 'tier',
    message: 'message',
    aboutDetails: 'aboutDetails',
    status: 'status'
  };

  export type InquiryOrderByRelevanceFieldEnum = (typeof InquiryOrderByRelevanceFieldEnum)[keyof typeof InquiryOrderByRelevanceFieldEnum]


  export const EventOrderByRelevanceFieldEnum: {
    type: 'type',
    title: 'title',
    description: 'description',
    speaker: 'speaker',
    instructor: 'instructor',
    date: 'date',
    time: 'time',
    location: 'location',
    link: 'link',
    status: 'status',
    color: 'color',
    imageUrl: 'imageUrl'
  };

  export type EventOrderByRelevanceFieldEnum = (typeof EventOrderByRelevanceFieldEnum)[keyof typeof EventOrderByRelevanceFieldEnum]


  export const PricingPlanOrderByRelevanceFieldEnum: {
    name: 'name',
    priceINR: 'priceINR',
    priceUSD: 'priceUSD',
    description: 'description',
    cta: 'cta',
    tag: 'tag'
  };

  export type PricingPlanOrderByRelevanceFieldEnum = (typeof PricingPlanOrderByRelevanceFieldEnum)[keyof typeof PricingPlanOrderByRelevanceFieldEnum]


  export const AdminOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role'
  };

  export type AdminOrderByRelevanceFieldEnum = (typeof AdminOrderByRelevanceFieldEnum)[keyof typeof AdminOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type MemberWhereInput = {
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    id?: IntFilter<"Member"> | number
    name?: StringFilter<"Member"> | string
    email?: StringFilter<"Member"> | string
    phone?: StringNullableFilter<"Member"> | string | null
    institution?: StringNullableFilter<"Member"> | string | null
    tier?: StringNullableFilter<"Member"> | string | null
    status?: StringFilter<"Member"> | string
    joinedAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
  }

  export type MemberOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    institution?: SortOrderInput | SortOrder
    tier?: SortOrderInput | SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: MemberOrderByRelevanceInput
  }

  export type MemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    name?: StringFilter<"Member"> | string
    phone?: StringNullableFilter<"Member"> | string | null
    institution?: StringNullableFilter<"Member"> | string | null
    tier?: StringNullableFilter<"Member"> | string | null
    status?: StringFilter<"Member"> | string
    joinedAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
  }, "id" | "email">

  export type MemberOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    institution?: SortOrderInput | SortOrder
    tier?: SortOrderInput | SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MemberCountOrderByAggregateInput
    _avg?: MemberAvgOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
    _sum?: MemberSumOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    OR?: MemberScalarWhereWithAggregatesInput[]
    NOT?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Member"> | number
    name?: StringWithAggregatesFilter<"Member"> | string
    email?: StringWithAggregatesFilter<"Member"> | string
    phone?: StringNullableWithAggregatesFilter<"Member"> | string | null
    institution?: StringNullableWithAggregatesFilter<"Member"> | string | null
    tier?: StringNullableWithAggregatesFilter<"Member"> | string | null
    status?: StringWithAggregatesFilter<"Member"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
  }

  export type JournalWhereInput = {
    AND?: JournalWhereInput | JournalWhereInput[]
    OR?: JournalWhereInput[]
    NOT?: JournalWhereInput | JournalWhereInput[]
    id?: IntFilter<"Journal"> | number
    name?: StringFilter<"Journal"> | string
    description?: StringNullableFilter<"Journal"> | string | null
    issn?: StringNullableFilter<"Journal"> | string | null
    domain?: StringNullableFilter<"Journal"> | string | null
    indexing?: JsonNullableFilter<"Journal">
    link?: StringNullableFilter<"Journal"> | string | null
    imageUrl?: StringNullableFilter<"Journal"> | string | null
    isFeatured?: BoolFilter<"Journal"> | boolean
    createdAt?: DateTimeFilter<"Journal"> | Date | string
    updatedAt?: DateTimeFilter<"Journal"> | Date | string
  }

  export type JournalOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    issn?: SortOrderInput | SortOrder
    domain?: SortOrderInput | SortOrder
    indexing?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: JournalOrderByRelevanceInput
  }

  export type JournalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JournalWhereInput | JournalWhereInput[]
    OR?: JournalWhereInput[]
    NOT?: JournalWhereInput | JournalWhereInput[]
    name?: StringFilter<"Journal"> | string
    description?: StringNullableFilter<"Journal"> | string | null
    issn?: StringNullableFilter<"Journal"> | string | null
    domain?: StringNullableFilter<"Journal"> | string | null
    indexing?: JsonNullableFilter<"Journal">
    link?: StringNullableFilter<"Journal"> | string | null
    imageUrl?: StringNullableFilter<"Journal"> | string | null
    isFeatured?: BoolFilter<"Journal"> | boolean
    createdAt?: DateTimeFilter<"Journal"> | Date | string
    updatedAt?: DateTimeFilter<"Journal"> | Date | string
  }, "id">

  export type JournalOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    issn?: SortOrderInput | SortOrder
    domain?: SortOrderInput | SortOrder
    indexing?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JournalCountOrderByAggregateInput
    _avg?: JournalAvgOrderByAggregateInput
    _max?: JournalMaxOrderByAggregateInput
    _min?: JournalMinOrderByAggregateInput
    _sum?: JournalSumOrderByAggregateInput
  }

  export type JournalScalarWhereWithAggregatesInput = {
    AND?: JournalScalarWhereWithAggregatesInput | JournalScalarWhereWithAggregatesInput[]
    OR?: JournalScalarWhereWithAggregatesInput[]
    NOT?: JournalScalarWhereWithAggregatesInput | JournalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Journal"> | number
    name?: StringWithAggregatesFilter<"Journal"> | string
    description?: StringNullableWithAggregatesFilter<"Journal"> | string | null
    issn?: StringNullableWithAggregatesFilter<"Journal"> | string | null
    domain?: StringNullableWithAggregatesFilter<"Journal"> | string | null
    indexing?: JsonNullableWithAggregatesFilter<"Journal">
    link?: StringNullableWithAggregatesFilter<"Journal"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Journal"> | string | null
    isFeatured?: BoolWithAggregatesFilter<"Journal"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Journal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Journal"> | Date | string
  }

  export type MembershipTierWhereInput = {
    AND?: MembershipTierWhereInput | MembershipTierWhereInput[]
    OR?: MembershipTierWhereInput[]
    NOT?: MembershipTierWhereInput | MembershipTierWhereInput[]
    id?: IntFilter<"MembershipTier"> | number
    name?: StringFilter<"MembershipTier"> | string
    icon?: StringNullableFilter<"MembershipTier"> | string | null
    priceINR?: StringFilter<"MembershipTier"> | string
    priceUSD?: StringFilter<"MembershipTier"> | string
    description?: StringNullableFilter<"MembershipTier"> | string | null
    benefits?: JsonNullableFilter<"MembershipTier">
    order?: IntFilter<"MembershipTier"> | number
    createdAt?: DateTimeFilter<"MembershipTier"> | Date | string
    updatedAt?: DateTimeFilter<"MembershipTier"> | Date | string
  }

  export type MembershipTierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrderInput | SortOrder
    priceINR?: SortOrder
    priceUSD?: SortOrder
    description?: SortOrderInput | SortOrder
    benefits?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: MembershipTierOrderByRelevanceInput
  }

  export type MembershipTierWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MembershipTierWhereInput | MembershipTierWhereInput[]
    OR?: MembershipTierWhereInput[]
    NOT?: MembershipTierWhereInput | MembershipTierWhereInput[]
    name?: StringFilter<"MembershipTier"> | string
    icon?: StringNullableFilter<"MembershipTier"> | string | null
    priceINR?: StringFilter<"MembershipTier"> | string
    priceUSD?: StringFilter<"MembershipTier"> | string
    description?: StringNullableFilter<"MembershipTier"> | string | null
    benefits?: JsonNullableFilter<"MembershipTier">
    order?: IntFilter<"MembershipTier"> | number
    createdAt?: DateTimeFilter<"MembershipTier"> | Date | string
    updatedAt?: DateTimeFilter<"MembershipTier"> | Date | string
  }, "id">

  export type MembershipTierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrderInput | SortOrder
    priceINR?: SortOrder
    priceUSD?: SortOrder
    description?: SortOrderInput | SortOrder
    benefits?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MembershipTierCountOrderByAggregateInput
    _avg?: MembershipTierAvgOrderByAggregateInput
    _max?: MembershipTierMaxOrderByAggregateInput
    _min?: MembershipTierMinOrderByAggregateInput
    _sum?: MembershipTierSumOrderByAggregateInput
  }

  export type MembershipTierScalarWhereWithAggregatesInput = {
    AND?: MembershipTierScalarWhereWithAggregatesInput | MembershipTierScalarWhereWithAggregatesInput[]
    OR?: MembershipTierScalarWhereWithAggregatesInput[]
    NOT?: MembershipTierScalarWhereWithAggregatesInput | MembershipTierScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MembershipTier"> | number
    name?: StringWithAggregatesFilter<"MembershipTier"> | string
    icon?: StringNullableWithAggregatesFilter<"MembershipTier"> | string | null
    priceINR?: StringWithAggregatesFilter<"MembershipTier"> | string
    priceUSD?: StringWithAggregatesFilter<"MembershipTier"> | string
    description?: StringNullableWithAggregatesFilter<"MembershipTier"> | string | null
    benefits?: JsonNullableWithAggregatesFilter<"MembershipTier">
    order?: IntWithAggregatesFilter<"MembershipTier"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MembershipTier"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MembershipTier"> | Date | string
  }

  export type ConferenceWhereInput = {
    AND?: ConferenceWhereInput | ConferenceWhereInput[]
    OR?: ConferenceWhereInput[]
    NOT?: ConferenceWhereInput | ConferenceWhereInput[]
    id?: IntFilter<"Conference"> | number
    title?: StringFilter<"Conference"> | string
    shortTitle?: StringNullableFilter<"Conference"> | string | null
    theme?: StringNullableFilter<"Conference"> | string | null
    startDate?: StringNullableFilter<"Conference"> | string | null
    endDate?: StringNullableFilter<"Conference"> | string | null
    venue?: StringNullableFilter<"Conference"> | string | null
    country?: StringNullableFilter<"Conference"> | string | null
    modes?: JsonNullableFilter<"Conference">
    about?: StringNullableFilter<"Conference"> | string | null
    websiteUrl?: StringNullableFilter<"Conference"> | string | null
    contactEmail?: StringNullableFilter<"Conference"> | string | null
    imageUrl?: StringNullableFilter<"Conference"> | string | null
    brochureUrl?: StringNullableFilter<"Conference"> | string | null
    organizingCommittee?: StringNullableFilter<"Conference"> | string | null
    keynoteSpeakers?: StringNullableFilter<"Conference"> | string | null
    editorialBoard?: StringNullableFilter<"Conference"> | string | null
    tracks?: StringNullableFilter<"Conference"> | string | null
    keywords?: StringNullableFilter<"Conference"> | string | null
    submissionInstructions?: StringNullableFilter<"Conference"> | string | null
    submissionStartDate?: StringNullableFilter<"Conference"> | string | null
    abstractDeadline?: StringNullableFilter<"Conference"> | string | null
    fullPaperDeadline?: StringNullableFilter<"Conference"> | string | null
    registrationDeadline?: StringNullableFilter<"Conference"> | string | null
    paperCategories?: JsonNullableFilter<"Conference">
    peerReviewMethod?: StringNullableFilter<"Conference"> | string | null
    color?: StringNullableFilter<"Conference"> | string | null
    order?: IntFilter<"Conference"> | number
    isFeatured?: BoolFilter<"Conference"> | boolean
    isActive?: BoolFilter<"Conference"> | boolean
    date?: StringNullableFilter<"Conference"> | string | null
    location?: StringNullableFilter<"Conference"> | string | null
    status?: StringNullableFilter<"Conference"> | string | null
    createdAt?: DateTimeFilter<"Conference"> | Date | string
    updatedAt?: DateTimeFilter<"Conference"> | Date | string
  }

  export type ConferenceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    shortTitle?: SortOrderInput | SortOrder
    theme?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    venue?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    modes?: SortOrderInput | SortOrder
    about?: SortOrderInput | SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    contactEmail?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    brochureUrl?: SortOrderInput | SortOrder
    organizingCommittee?: SortOrderInput | SortOrder
    keynoteSpeakers?: SortOrderInput | SortOrder
    editorialBoard?: SortOrderInput | SortOrder
    tracks?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    submissionInstructions?: SortOrderInput | SortOrder
    submissionStartDate?: SortOrderInput | SortOrder
    abstractDeadline?: SortOrderInput | SortOrder
    fullPaperDeadline?: SortOrderInput | SortOrder
    registrationDeadline?: SortOrderInput | SortOrder
    paperCategories?: SortOrderInput | SortOrder
    peerReviewMethod?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    order?: SortOrder
    isFeatured?: SortOrder
    isActive?: SortOrder
    date?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: ConferenceOrderByRelevanceInput
  }

  export type ConferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConferenceWhereInput | ConferenceWhereInput[]
    OR?: ConferenceWhereInput[]
    NOT?: ConferenceWhereInput | ConferenceWhereInput[]
    title?: StringFilter<"Conference"> | string
    shortTitle?: StringNullableFilter<"Conference"> | string | null
    theme?: StringNullableFilter<"Conference"> | string | null
    startDate?: StringNullableFilter<"Conference"> | string | null
    endDate?: StringNullableFilter<"Conference"> | string | null
    venue?: StringNullableFilter<"Conference"> | string | null
    country?: StringNullableFilter<"Conference"> | string | null
    modes?: JsonNullableFilter<"Conference">
    about?: StringNullableFilter<"Conference"> | string | null
    websiteUrl?: StringNullableFilter<"Conference"> | string | null
    contactEmail?: StringNullableFilter<"Conference"> | string | null
    imageUrl?: StringNullableFilter<"Conference"> | string | null
    brochureUrl?: StringNullableFilter<"Conference"> | string | null
    organizingCommittee?: StringNullableFilter<"Conference"> | string | null
    keynoteSpeakers?: StringNullableFilter<"Conference"> | string | null
    editorialBoard?: StringNullableFilter<"Conference"> | string | null
    tracks?: StringNullableFilter<"Conference"> | string | null
    keywords?: StringNullableFilter<"Conference"> | string | null
    submissionInstructions?: StringNullableFilter<"Conference"> | string | null
    submissionStartDate?: StringNullableFilter<"Conference"> | string | null
    abstractDeadline?: StringNullableFilter<"Conference"> | string | null
    fullPaperDeadline?: StringNullableFilter<"Conference"> | string | null
    registrationDeadline?: StringNullableFilter<"Conference"> | string | null
    paperCategories?: JsonNullableFilter<"Conference">
    peerReviewMethod?: StringNullableFilter<"Conference"> | string | null
    color?: StringNullableFilter<"Conference"> | string | null
    order?: IntFilter<"Conference"> | number
    isFeatured?: BoolFilter<"Conference"> | boolean
    isActive?: BoolFilter<"Conference"> | boolean
    date?: StringNullableFilter<"Conference"> | string | null
    location?: StringNullableFilter<"Conference"> | string | null
    status?: StringNullableFilter<"Conference"> | string | null
    createdAt?: DateTimeFilter<"Conference"> | Date | string
    updatedAt?: DateTimeFilter<"Conference"> | Date | string
  }, "id">

  export type ConferenceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    shortTitle?: SortOrderInput | SortOrder
    theme?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    venue?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    modes?: SortOrderInput | SortOrder
    about?: SortOrderInput | SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    contactEmail?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    brochureUrl?: SortOrderInput | SortOrder
    organizingCommittee?: SortOrderInput | SortOrder
    keynoteSpeakers?: SortOrderInput | SortOrder
    editorialBoard?: SortOrderInput | SortOrder
    tracks?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    submissionInstructions?: SortOrderInput | SortOrder
    submissionStartDate?: SortOrderInput | SortOrder
    abstractDeadline?: SortOrderInput | SortOrder
    fullPaperDeadline?: SortOrderInput | SortOrder
    registrationDeadline?: SortOrderInput | SortOrder
    paperCategories?: SortOrderInput | SortOrder
    peerReviewMethod?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    order?: SortOrder
    isFeatured?: SortOrder
    isActive?: SortOrder
    date?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConferenceCountOrderByAggregateInput
    _avg?: ConferenceAvgOrderByAggregateInput
    _max?: ConferenceMaxOrderByAggregateInput
    _min?: ConferenceMinOrderByAggregateInput
    _sum?: ConferenceSumOrderByAggregateInput
  }

  export type ConferenceScalarWhereWithAggregatesInput = {
    AND?: ConferenceScalarWhereWithAggregatesInput | ConferenceScalarWhereWithAggregatesInput[]
    OR?: ConferenceScalarWhereWithAggregatesInput[]
    NOT?: ConferenceScalarWhereWithAggregatesInput | ConferenceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Conference"> | number
    title?: StringWithAggregatesFilter<"Conference"> | string
    shortTitle?: StringNullableWithAggregatesFilter<"Conference"> | string | null
    theme?: StringNullableWithAggregatesFilter<"Conference"> | string | null
    startDate?: StringNullableWithAggregatesFilter<"Conference"> | string | null
    endDate?: StringNullableWithAggregatesFilter<"Conference"> | string | null
    venue?: StringNullableWithAggregatesFilter<"Conference"> | string | null
    country?: StringNullableWithAggregatesFilter<"Conference"> | string | null
    modes?: JsonNullableWithAggregatesFilter<"Conference">
    about?: StringNullableWithAggregatesFilter<"Conference"> | string | null
    websiteUrl?: StringNullableWithAggregatesFilter<"Conference"> | string | null
    contactEmail?: StringNullableWithAggregatesFilter<"Conference"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Conference"> | string | null
    brochureUrl?: StringNullableWithAggregatesFilter<"Conference"> | string | null
    organizingCommittee?: StringNullableWithAggregatesFilter<"Conference"> | string | null
    keynoteSpeakers?: StringNullableWithAggregatesFilter<"Conference"> | string | null
    editorialBoard?: StringNullableWithAggregatesFilter<"Conference"> | string | null
    tracks?: StringNullableWithAggregatesFilter<"Conference"> | string | null
    keywords?: StringNullableWithAggregatesFilter<"Conference"> | string | null
    submissionInstructions?: StringNullableWithAggregatesFilter<"Conference"> | string | null
    submissionStartDate?: StringNullableWithAggregatesFilter<"Conference"> | string | null
    abstractDeadline?: StringNullableWithAggregatesFilter<"Conference"> | string | null
    fullPaperDeadline?: StringNullableWithAggregatesFilter<"Conference"> | string | null
    registrationDeadline?: StringNullableWithAggregatesFilter<"Conference"> | string | null
    paperCategories?: JsonNullableWithAggregatesFilter<"Conference">
    peerReviewMethod?: StringNullableWithAggregatesFilter<"Conference"> | string | null
    color?: StringNullableWithAggregatesFilter<"Conference"> | string | null
    order?: IntWithAggregatesFilter<"Conference"> | number
    isFeatured?: BoolWithAggregatesFilter<"Conference"> | boolean
    isActive?: BoolWithAggregatesFilter<"Conference"> | boolean
    date?: StringNullableWithAggregatesFilter<"Conference"> | string | null
    location?: StringNullableWithAggregatesFilter<"Conference"> | string | null
    status?: StringNullableWithAggregatesFilter<"Conference"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Conference"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Conference"> | Date | string
  }

  export type InquiryWhereInput = {
    AND?: InquiryWhereInput | InquiryWhereInput[]
    OR?: InquiryWhereInput[]
    NOT?: InquiryWhereInput | InquiryWhereInput[]
    id?: IntFilter<"Inquiry"> | number
    name?: StringFilter<"Inquiry"> | string
    email?: StringFilter<"Inquiry"> | string
    phone?: StringNullableFilter<"Inquiry"> | string | null
    institution?: StringNullableFilter<"Inquiry"> | string | null
    subject?: StringNullableFilter<"Inquiry"> | string | null
    purpose?: StringNullableFilter<"Inquiry"> | string | null
    tier?: StringNullableFilter<"Inquiry"> | string | null
    message?: StringFilter<"Inquiry"> | string
    aboutDetails?: StringNullableFilter<"Inquiry"> | string | null
    status?: StringFilter<"Inquiry"> | string
    createdAt?: DateTimeFilter<"Inquiry"> | Date | string
    updatedAt?: DateTimeFilter<"Inquiry"> | Date | string
  }

  export type InquiryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    institution?: SortOrderInput | SortOrder
    subject?: SortOrderInput | SortOrder
    purpose?: SortOrderInput | SortOrder
    tier?: SortOrderInput | SortOrder
    message?: SortOrder
    aboutDetails?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: InquiryOrderByRelevanceInput
  }

  export type InquiryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InquiryWhereInput | InquiryWhereInput[]
    OR?: InquiryWhereInput[]
    NOT?: InquiryWhereInput | InquiryWhereInput[]
    name?: StringFilter<"Inquiry"> | string
    email?: StringFilter<"Inquiry"> | string
    phone?: StringNullableFilter<"Inquiry"> | string | null
    institution?: StringNullableFilter<"Inquiry"> | string | null
    subject?: StringNullableFilter<"Inquiry"> | string | null
    purpose?: StringNullableFilter<"Inquiry"> | string | null
    tier?: StringNullableFilter<"Inquiry"> | string | null
    message?: StringFilter<"Inquiry"> | string
    aboutDetails?: StringNullableFilter<"Inquiry"> | string | null
    status?: StringFilter<"Inquiry"> | string
    createdAt?: DateTimeFilter<"Inquiry"> | Date | string
    updatedAt?: DateTimeFilter<"Inquiry"> | Date | string
  }, "id">

  export type InquiryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    institution?: SortOrderInput | SortOrder
    subject?: SortOrderInput | SortOrder
    purpose?: SortOrderInput | SortOrder
    tier?: SortOrderInput | SortOrder
    message?: SortOrder
    aboutDetails?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InquiryCountOrderByAggregateInput
    _avg?: InquiryAvgOrderByAggregateInput
    _max?: InquiryMaxOrderByAggregateInput
    _min?: InquiryMinOrderByAggregateInput
    _sum?: InquirySumOrderByAggregateInput
  }

  export type InquiryScalarWhereWithAggregatesInput = {
    AND?: InquiryScalarWhereWithAggregatesInput | InquiryScalarWhereWithAggregatesInput[]
    OR?: InquiryScalarWhereWithAggregatesInput[]
    NOT?: InquiryScalarWhereWithAggregatesInput | InquiryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Inquiry"> | number
    name?: StringWithAggregatesFilter<"Inquiry"> | string
    email?: StringWithAggregatesFilter<"Inquiry"> | string
    phone?: StringNullableWithAggregatesFilter<"Inquiry"> | string | null
    institution?: StringNullableWithAggregatesFilter<"Inquiry"> | string | null
    subject?: StringNullableWithAggregatesFilter<"Inquiry"> | string | null
    purpose?: StringNullableWithAggregatesFilter<"Inquiry"> | string | null
    tier?: StringNullableWithAggregatesFilter<"Inquiry"> | string | null
    message?: StringWithAggregatesFilter<"Inquiry"> | string
    aboutDetails?: StringNullableWithAggregatesFilter<"Inquiry"> | string | null
    status?: StringWithAggregatesFilter<"Inquiry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Inquiry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Inquiry"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: IntFilter<"Event"> | number
    type?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    speaker?: StringNullableFilter<"Event"> | string | null
    instructor?: StringNullableFilter<"Event"> | string | null
    date?: StringNullableFilter<"Event"> | string | null
    time?: StringNullableFilter<"Event"> | string | null
    location?: StringNullableFilter<"Event"> | string | null
    link?: StringNullableFilter<"Event"> | string | null
    status?: StringNullableFilter<"Event"> | string | null
    color?: StringNullableFilter<"Event"> | string | null
    order?: IntFilter<"Event"> | number
    isFeatured?: BoolFilter<"Event"> | boolean
    imageUrl?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    speaker?: SortOrderInput | SortOrder
    instructor?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    order?: SortOrder
    isFeatured?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: EventOrderByRelevanceInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    type?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    speaker?: StringNullableFilter<"Event"> | string | null
    instructor?: StringNullableFilter<"Event"> | string | null
    date?: StringNullableFilter<"Event"> | string | null
    time?: StringNullableFilter<"Event"> | string | null
    location?: StringNullableFilter<"Event"> | string | null
    link?: StringNullableFilter<"Event"> | string | null
    status?: StringNullableFilter<"Event"> | string | null
    color?: StringNullableFilter<"Event"> | string | null
    order?: IntFilter<"Event"> | number
    isFeatured?: BoolFilter<"Event"> | boolean
    imageUrl?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    speaker?: SortOrderInput | SortOrder
    instructor?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    order?: SortOrder
    isFeatured?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Event"> | number
    type?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    speaker?: StringNullableWithAggregatesFilter<"Event"> | string | null
    instructor?: StringNullableWithAggregatesFilter<"Event"> | string | null
    date?: StringNullableWithAggregatesFilter<"Event"> | string | null
    time?: StringNullableWithAggregatesFilter<"Event"> | string | null
    location?: StringNullableWithAggregatesFilter<"Event"> | string | null
    link?: StringNullableWithAggregatesFilter<"Event"> | string | null
    status?: StringNullableWithAggregatesFilter<"Event"> | string | null
    color?: StringNullableWithAggregatesFilter<"Event"> | string | null
    order?: IntWithAggregatesFilter<"Event"> | number
    isFeatured?: BoolWithAggregatesFilter<"Event"> | boolean
    imageUrl?: StringNullableWithAggregatesFilter<"Event"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type PricingPlanWhereInput = {
    AND?: PricingPlanWhereInput | PricingPlanWhereInput[]
    OR?: PricingPlanWhereInput[]
    NOT?: PricingPlanWhereInput | PricingPlanWhereInput[]
    id?: IntFilter<"PricingPlan"> | number
    name?: StringFilter<"PricingPlan"> | string
    priceINR?: StringFilter<"PricingPlan"> | string
    priceUSD?: StringFilter<"PricingPlan"> | string
    description?: StringNullableFilter<"PricingPlan"> | string | null
    features?: JsonNullableFilter<"PricingPlan">
    cta?: StringNullableFilter<"PricingPlan"> | string | null
    highlight?: BoolFilter<"PricingPlan"> | boolean
    tag?: StringNullableFilter<"PricingPlan"> | string | null
    order?: IntFilter<"PricingPlan"> | number
    createdAt?: DateTimeFilter<"PricingPlan"> | Date | string
    updatedAt?: DateTimeFilter<"PricingPlan"> | Date | string
  }

  export type PricingPlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    priceINR?: SortOrder
    priceUSD?: SortOrder
    description?: SortOrderInput | SortOrder
    features?: SortOrderInput | SortOrder
    cta?: SortOrderInput | SortOrder
    highlight?: SortOrder
    tag?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: PricingPlanOrderByRelevanceInput
  }

  export type PricingPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PricingPlanWhereInput | PricingPlanWhereInput[]
    OR?: PricingPlanWhereInput[]
    NOT?: PricingPlanWhereInput | PricingPlanWhereInput[]
    name?: StringFilter<"PricingPlan"> | string
    priceINR?: StringFilter<"PricingPlan"> | string
    priceUSD?: StringFilter<"PricingPlan"> | string
    description?: StringNullableFilter<"PricingPlan"> | string | null
    features?: JsonNullableFilter<"PricingPlan">
    cta?: StringNullableFilter<"PricingPlan"> | string | null
    highlight?: BoolFilter<"PricingPlan"> | boolean
    tag?: StringNullableFilter<"PricingPlan"> | string | null
    order?: IntFilter<"PricingPlan"> | number
    createdAt?: DateTimeFilter<"PricingPlan"> | Date | string
    updatedAt?: DateTimeFilter<"PricingPlan"> | Date | string
  }, "id">

  export type PricingPlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    priceINR?: SortOrder
    priceUSD?: SortOrder
    description?: SortOrderInput | SortOrder
    features?: SortOrderInput | SortOrder
    cta?: SortOrderInput | SortOrder
    highlight?: SortOrder
    tag?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PricingPlanCountOrderByAggregateInput
    _avg?: PricingPlanAvgOrderByAggregateInput
    _max?: PricingPlanMaxOrderByAggregateInput
    _min?: PricingPlanMinOrderByAggregateInput
    _sum?: PricingPlanSumOrderByAggregateInput
  }

  export type PricingPlanScalarWhereWithAggregatesInput = {
    AND?: PricingPlanScalarWhereWithAggregatesInput | PricingPlanScalarWhereWithAggregatesInput[]
    OR?: PricingPlanScalarWhereWithAggregatesInput[]
    NOT?: PricingPlanScalarWhereWithAggregatesInput | PricingPlanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PricingPlan"> | number
    name?: StringWithAggregatesFilter<"PricingPlan"> | string
    priceINR?: StringWithAggregatesFilter<"PricingPlan"> | string
    priceUSD?: StringWithAggregatesFilter<"PricingPlan"> | string
    description?: StringNullableWithAggregatesFilter<"PricingPlan"> | string | null
    features?: JsonNullableWithAggregatesFilter<"PricingPlan">
    cta?: StringNullableWithAggregatesFilter<"PricingPlan"> | string | null
    highlight?: BoolWithAggregatesFilter<"PricingPlan"> | boolean
    tag?: StringNullableWithAggregatesFilter<"PricingPlan"> | string | null
    order?: IntWithAggregatesFilter<"PricingPlan"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PricingPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PricingPlan"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    name?: StringNullableFilter<"Admin"> | string | null
    role?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: AdminOrderByRelevanceInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    password?: StringFilter<"Admin"> | string
    name?: StringNullableFilter<"Admin"> | string | null
    role?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    name?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    role?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type MemberCreateInput = {
    name: string
    email: string
    phone?: string | null
    institution?: string | null
    tier?: string | null
    status?: string
    joinedAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    institution?: string | null
    tier?: string | null
    status?: string
    joinedAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberCreateManyInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    institution?: string | null
    tier?: string | null
    status?: string
    joinedAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalCreateInput = {
    name: string
    description?: string | null
    issn?: string | null
    domain?: string | null
    indexing?: NullableJsonNullValueInput | InputJsonValue
    link?: string | null
    imageUrl?: string | null
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JournalUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    issn?: string | null
    domain?: string | null
    indexing?: NullableJsonNullValueInput | InputJsonValue
    link?: string | null
    imageUrl?: string | null
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JournalUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    issn?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    indexing?: NullableJsonNullValueInput | InputJsonValue
    link?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    issn?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    indexing?: NullableJsonNullValueInput | InputJsonValue
    link?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    issn?: string | null
    domain?: string | null
    indexing?: NullableJsonNullValueInput | InputJsonValue
    link?: string | null
    imageUrl?: string | null
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JournalUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    issn?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    indexing?: NullableJsonNullValueInput | InputJsonValue
    link?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    issn?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    indexing?: NullableJsonNullValueInput | InputJsonValue
    link?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipTierCreateInput = {
    name: string
    icon?: string | null
    priceINR: string
    priceUSD: string
    description?: string | null
    benefits?: NullableJsonNullValueInput | InputJsonValue
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipTierUncheckedCreateInput = {
    id?: number
    name: string
    icon?: string | null
    priceINR: string
    priceUSD: string
    description?: string | null
    benefits?: NullableJsonNullValueInput | InputJsonValue
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipTierUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    priceINR?: StringFieldUpdateOperationsInput | string
    priceUSD?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableJsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipTierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    priceINR?: StringFieldUpdateOperationsInput | string
    priceUSD?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableJsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipTierCreateManyInput = {
    id?: number
    name: string
    icon?: string | null
    priceINR: string
    priceUSD: string
    description?: string | null
    benefits?: NullableJsonNullValueInput | InputJsonValue
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipTierUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    priceINR?: StringFieldUpdateOperationsInput | string
    priceUSD?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableJsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipTierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    priceINR?: StringFieldUpdateOperationsInput | string
    priceUSD?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableJsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConferenceCreateInput = {
    title: string
    shortTitle?: string | null
    theme?: string | null
    startDate?: string | null
    endDate?: string | null
    venue?: string | null
    country?: string | null
    modes?: NullableJsonNullValueInput | InputJsonValue
    about?: string | null
    websiteUrl?: string | null
    contactEmail?: string | null
    imageUrl?: string | null
    brochureUrl?: string | null
    organizingCommittee?: string | null
    keynoteSpeakers?: string | null
    editorialBoard?: string | null
    tracks?: string | null
    keywords?: string | null
    submissionInstructions?: string | null
    submissionStartDate?: string | null
    abstractDeadline?: string | null
    fullPaperDeadline?: string | null
    registrationDeadline?: string | null
    paperCategories?: NullableJsonNullValueInput | InputJsonValue
    peerReviewMethod?: string | null
    color?: string | null
    order?: number
    isFeatured?: boolean
    isActive?: boolean
    date?: string | null
    location?: string | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConferenceUncheckedCreateInput = {
    id?: number
    title: string
    shortTitle?: string | null
    theme?: string | null
    startDate?: string | null
    endDate?: string | null
    venue?: string | null
    country?: string | null
    modes?: NullableJsonNullValueInput | InputJsonValue
    about?: string | null
    websiteUrl?: string | null
    contactEmail?: string | null
    imageUrl?: string | null
    brochureUrl?: string | null
    organizingCommittee?: string | null
    keynoteSpeakers?: string | null
    editorialBoard?: string | null
    tracks?: string | null
    keywords?: string | null
    submissionInstructions?: string | null
    submissionStartDate?: string | null
    abstractDeadline?: string | null
    fullPaperDeadline?: string | null
    registrationDeadline?: string | null
    paperCategories?: NullableJsonNullValueInput | InputJsonValue
    peerReviewMethod?: string | null
    color?: string | null
    order?: number
    isFeatured?: boolean
    isActive?: boolean
    date?: string | null
    location?: string | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConferenceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    shortTitle?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    modes?: NullableJsonNullValueInput | InputJsonValue
    about?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    brochureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    organizingCommittee?: NullableStringFieldUpdateOperationsInput | string | null
    keynoteSpeakers?: NullableStringFieldUpdateOperationsInput | string | null
    editorialBoard?: NullableStringFieldUpdateOperationsInput | string | null
    tracks?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    submissionInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    submissionStartDate?: NullableStringFieldUpdateOperationsInput | string | null
    abstractDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    fullPaperDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    paperCategories?: NullableJsonNullValueInput | InputJsonValue
    peerReviewMethod?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    date?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConferenceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    shortTitle?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    modes?: NullableJsonNullValueInput | InputJsonValue
    about?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    brochureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    organizingCommittee?: NullableStringFieldUpdateOperationsInput | string | null
    keynoteSpeakers?: NullableStringFieldUpdateOperationsInput | string | null
    editorialBoard?: NullableStringFieldUpdateOperationsInput | string | null
    tracks?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    submissionInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    submissionStartDate?: NullableStringFieldUpdateOperationsInput | string | null
    abstractDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    fullPaperDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    paperCategories?: NullableJsonNullValueInput | InputJsonValue
    peerReviewMethod?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    date?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConferenceCreateManyInput = {
    id?: number
    title: string
    shortTitle?: string | null
    theme?: string | null
    startDate?: string | null
    endDate?: string | null
    venue?: string | null
    country?: string | null
    modes?: NullableJsonNullValueInput | InputJsonValue
    about?: string | null
    websiteUrl?: string | null
    contactEmail?: string | null
    imageUrl?: string | null
    brochureUrl?: string | null
    organizingCommittee?: string | null
    keynoteSpeakers?: string | null
    editorialBoard?: string | null
    tracks?: string | null
    keywords?: string | null
    submissionInstructions?: string | null
    submissionStartDate?: string | null
    abstractDeadline?: string | null
    fullPaperDeadline?: string | null
    registrationDeadline?: string | null
    paperCategories?: NullableJsonNullValueInput | InputJsonValue
    peerReviewMethod?: string | null
    color?: string | null
    order?: number
    isFeatured?: boolean
    isActive?: boolean
    date?: string | null
    location?: string | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConferenceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    shortTitle?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    modes?: NullableJsonNullValueInput | InputJsonValue
    about?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    brochureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    organizingCommittee?: NullableStringFieldUpdateOperationsInput | string | null
    keynoteSpeakers?: NullableStringFieldUpdateOperationsInput | string | null
    editorialBoard?: NullableStringFieldUpdateOperationsInput | string | null
    tracks?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    submissionInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    submissionStartDate?: NullableStringFieldUpdateOperationsInput | string | null
    abstractDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    fullPaperDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    paperCategories?: NullableJsonNullValueInput | InputJsonValue
    peerReviewMethod?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    date?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConferenceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    shortTitle?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    modes?: NullableJsonNullValueInput | InputJsonValue
    about?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    brochureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    organizingCommittee?: NullableStringFieldUpdateOperationsInput | string | null
    keynoteSpeakers?: NullableStringFieldUpdateOperationsInput | string | null
    editorialBoard?: NullableStringFieldUpdateOperationsInput | string | null
    tracks?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    submissionInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    submissionStartDate?: NullableStringFieldUpdateOperationsInput | string | null
    abstractDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    fullPaperDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    paperCategories?: NullableJsonNullValueInput | InputJsonValue
    peerReviewMethod?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    date?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryCreateInput = {
    name: string
    email: string
    phone?: string | null
    institution?: string | null
    subject?: string | null
    purpose?: string | null
    tier?: string | null
    message: string
    aboutDetails?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InquiryUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    institution?: string | null
    subject?: string | null
    purpose?: string | null
    tier?: string | null
    message: string
    aboutDetails?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InquiryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    aboutDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    aboutDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryCreateManyInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    institution?: string | null
    subject?: string | null
    purpose?: string | null
    tier?: string | null
    message: string
    aboutDetails?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InquiryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    aboutDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    aboutDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    type: string
    title: string
    description?: string | null
    speaker?: string | null
    instructor?: string | null
    date?: string | null
    time?: string | null
    location?: string | null
    link?: string | null
    status?: string | null
    color?: string | null
    order?: number
    isFeatured?: boolean
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUncheckedCreateInput = {
    id?: number
    type: string
    title: string
    description?: string | null
    speaker?: string | null
    instructor?: string | null
    date?: string | null
    time?: string | null
    location?: string | null
    link?: string | null
    status?: string | null
    color?: string | null
    order?: number
    isFeatured?: boolean
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    speaker?: NullableStringFieldUpdateOperationsInput | string | null
    instructor?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    speaker?: NullableStringFieldUpdateOperationsInput | string | null
    instructor?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyInput = {
    id?: number
    type: string
    title: string
    description?: string | null
    speaker?: string | null
    instructor?: string | null
    date?: string | null
    time?: string | null
    location?: string | null
    link?: string | null
    status?: string | null
    color?: string | null
    order?: number
    isFeatured?: boolean
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    speaker?: NullableStringFieldUpdateOperationsInput | string | null
    instructor?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    speaker?: NullableStringFieldUpdateOperationsInput | string | null
    instructor?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingPlanCreateInput = {
    name: string
    priceINR: string
    priceUSD: string
    description?: string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    cta?: string | null
    highlight?: boolean
    tag?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingPlanUncheckedCreateInput = {
    id?: number
    name: string
    priceINR: string
    priceUSD: string
    description?: string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    cta?: string | null
    highlight?: boolean
    tag?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingPlanUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    priceINR?: StringFieldUpdateOperationsInput | string
    priceUSD?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    cta?: NullableStringFieldUpdateOperationsInput | string | null
    highlight?: BoolFieldUpdateOperationsInput | boolean
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingPlanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    priceINR?: StringFieldUpdateOperationsInput | string
    priceUSD?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    cta?: NullableStringFieldUpdateOperationsInput | string | null
    highlight?: BoolFieldUpdateOperationsInput | boolean
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingPlanCreateManyInput = {
    id?: number
    name: string
    priceINR: string
    priceUSD: string
    description?: string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    cta?: string | null
    highlight?: boolean
    tag?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingPlanUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    priceINR?: StringFieldUpdateOperationsInput | string
    priceUSD?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    cta?: NullableStringFieldUpdateOperationsInput | string | null
    highlight?: BoolFieldUpdateOperationsInput | boolean
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingPlanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    priceINR?: StringFieldUpdateOperationsInput | string
    priceUSD?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    cta?: NullableStringFieldUpdateOperationsInput | string | null
    highlight?: BoolFieldUpdateOperationsInput | boolean
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    email: string
    password: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MemberOrderByRelevanceInput = {
    fields: MemberOrderByRelevanceFieldEnum | MemberOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MemberCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    institution?: SortOrder
    tier?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    institution?: SortOrder
    tier?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    institution?: SortOrder
    tier?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type JournalOrderByRelevanceInput = {
    fields: JournalOrderByRelevanceFieldEnum | JournalOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type JournalCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    issn?: SortOrder
    domain?: SortOrder
    indexing?: SortOrder
    link?: SortOrder
    imageUrl?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JournalAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type JournalMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    issn?: SortOrder
    domain?: SortOrder
    link?: SortOrder
    imageUrl?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JournalMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    issn?: SortOrder
    domain?: SortOrder
    link?: SortOrder
    imageUrl?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JournalSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MembershipTierOrderByRelevanceInput = {
    fields: MembershipTierOrderByRelevanceFieldEnum | MembershipTierOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MembershipTierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    priceINR?: SortOrder
    priceUSD?: SortOrder
    description?: SortOrder
    benefits?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembershipTierAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type MembershipTierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    priceINR?: SortOrder
    priceUSD?: SortOrder
    description?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembershipTierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    priceINR?: SortOrder
    priceUSD?: SortOrder
    description?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembershipTierSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type ConferenceOrderByRelevanceInput = {
    fields: ConferenceOrderByRelevanceFieldEnum | ConferenceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ConferenceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    shortTitle?: SortOrder
    theme?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    venue?: SortOrder
    country?: SortOrder
    modes?: SortOrder
    about?: SortOrder
    websiteUrl?: SortOrder
    contactEmail?: SortOrder
    imageUrl?: SortOrder
    brochureUrl?: SortOrder
    organizingCommittee?: SortOrder
    keynoteSpeakers?: SortOrder
    editorialBoard?: SortOrder
    tracks?: SortOrder
    keywords?: SortOrder
    submissionInstructions?: SortOrder
    submissionStartDate?: SortOrder
    abstractDeadline?: SortOrder
    fullPaperDeadline?: SortOrder
    registrationDeadline?: SortOrder
    paperCategories?: SortOrder
    peerReviewMethod?: SortOrder
    color?: SortOrder
    order?: SortOrder
    isFeatured?: SortOrder
    isActive?: SortOrder
    date?: SortOrder
    location?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConferenceAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type ConferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    shortTitle?: SortOrder
    theme?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    venue?: SortOrder
    country?: SortOrder
    about?: SortOrder
    websiteUrl?: SortOrder
    contactEmail?: SortOrder
    imageUrl?: SortOrder
    brochureUrl?: SortOrder
    organizingCommittee?: SortOrder
    keynoteSpeakers?: SortOrder
    editorialBoard?: SortOrder
    tracks?: SortOrder
    keywords?: SortOrder
    submissionInstructions?: SortOrder
    submissionStartDate?: SortOrder
    abstractDeadline?: SortOrder
    fullPaperDeadline?: SortOrder
    registrationDeadline?: SortOrder
    peerReviewMethod?: SortOrder
    color?: SortOrder
    order?: SortOrder
    isFeatured?: SortOrder
    isActive?: SortOrder
    date?: SortOrder
    location?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConferenceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    shortTitle?: SortOrder
    theme?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    venue?: SortOrder
    country?: SortOrder
    about?: SortOrder
    websiteUrl?: SortOrder
    contactEmail?: SortOrder
    imageUrl?: SortOrder
    brochureUrl?: SortOrder
    organizingCommittee?: SortOrder
    keynoteSpeakers?: SortOrder
    editorialBoard?: SortOrder
    tracks?: SortOrder
    keywords?: SortOrder
    submissionInstructions?: SortOrder
    submissionStartDate?: SortOrder
    abstractDeadline?: SortOrder
    fullPaperDeadline?: SortOrder
    registrationDeadline?: SortOrder
    peerReviewMethod?: SortOrder
    color?: SortOrder
    order?: SortOrder
    isFeatured?: SortOrder
    isActive?: SortOrder
    date?: SortOrder
    location?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConferenceSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type InquiryOrderByRelevanceInput = {
    fields: InquiryOrderByRelevanceFieldEnum | InquiryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InquiryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    institution?: SortOrder
    subject?: SortOrder
    purpose?: SortOrder
    tier?: SortOrder
    message?: SortOrder
    aboutDetails?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InquiryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InquiryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    institution?: SortOrder
    subject?: SortOrder
    purpose?: SortOrder
    tier?: SortOrder
    message?: SortOrder
    aboutDetails?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InquiryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    institution?: SortOrder
    subject?: SortOrder
    purpose?: SortOrder
    tier?: SortOrder
    message?: SortOrder
    aboutDetails?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InquirySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EventOrderByRelevanceInput = {
    fields: EventOrderByRelevanceFieldEnum | EventOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    speaker?: SortOrder
    instructor?: SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
    link?: SortOrder
    status?: SortOrder
    color?: SortOrder
    order?: SortOrder
    isFeatured?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    speaker?: SortOrder
    instructor?: SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
    link?: SortOrder
    status?: SortOrder
    color?: SortOrder
    order?: SortOrder
    isFeatured?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    speaker?: SortOrder
    instructor?: SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
    link?: SortOrder
    status?: SortOrder
    color?: SortOrder
    order?: SortOrder
    isFeatured?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type PricingPlanOrderByRelevanceInput = {
    fields: PricingPlanOrderByRelevanceFieldEnum | PricingPlanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PricingPlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priceINR?: SortOrder
    priceUSD?: SortOrder
    description?: SortOrder
    features?: SortOrder
    cta?: SortOrder
    highlight?: SortOrder
    tag?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingPlanAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type PricingPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priceINR?: SortOrder
    priceUSD?: SortOrder
    description?: SortOrder
    cta?: SortOrder
    highlight?: SortOrder
    tag?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingPlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priceINR?: SortOrder
    priceUSD?: SortOrder
    description?: SortOrder
    cta?: SortOrder
    highlight?: SortOrder
    tag?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingPlanSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type AdminOrderByRelevanceInput = {
    fields: AdminOrderByRelevanceFieldEnum | AdminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}