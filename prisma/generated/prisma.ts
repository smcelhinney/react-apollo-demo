import { Prisma as BasePrisma, BasePrismaOptions } from 'prisma-binding'
import { GraphQLResolveInfo } from 'graphql'

export const typeDefs = `
type AggregateCharacter {
  count: Int!
}

type AggregateMovie {
  count: Int!
}

type AggregateWeapon {
  count: Int!
}

type BatchPayload {
  """
  The number of nodes that have been affected by the Batch operation.
  """
  count: Long!
}

type Character implements Node {
  id: ID!
  name: String!
  alterEgo: String!
  weapon(where: WeaponWhereInput, orderBy: WeaponOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Weapon!]
  movie(where: MovieWhereInput, orderBy: MovieOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Movie!]
}

"""
A connection to a list of items.
"""
type CharacterConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CharacterEdge]!
  aggregate: AggregateCharacter!
}

input CharacterCreateInput {
  name: String!
  alterEgo: String!
  weapon: WeaponCreateManyWithoutWieldedByInput
  movie: MovieCreateManyWithoutCharactersInput
}

input CharacterCreateManyWithoutMovieInput {
  create: [CharacterCreateWithoutMovieInput!]
  connect: [CharacterWhereUniqueInput!]
}

input CharacterCreateManyWithoutWeaponInput {
  create: [CharacterCreateWithoutWeaponInput!]
  connect: [CharacterWhereUniqueInput!]
}

input CharacterCreateWithoutMovieInput {
  name: String!
  alterEgo: String!
  weapon: WeaponCreateManyWithoutWieldedByInput
}

input CharacterCreateWithoutWeaponInput {
  name: String!
  alterEgo: String!
  movie: MovieCreateManyWithoutCharactersInput
}

"""
An edge in a connection.
"""
type CharacterEdge {
  """
  The item at the end of the edge.
  """
  node: Character!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CharacterOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  alterEgo_ASC
  alterEgo_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CharacterPreviousValues {
  id: ID!
  name: String!
  alterEgo: String!
}

type CharacterSubscriptionPayload {
  mutation: MutationType!
  node: Character
  updatedFields: [String!]
  previousValues: CharacterPreviousValues
}

input CharacterSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CharacterSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CharacterSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CharacterSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CharacterWhereInput
}

input CharacterUpdateInput {
  name: String
  alterEgo: String
  weapon: WeaponUpdateManyWithoutWieldedByInput
  movie: MovieUpdateManyWithoutCharactersInput
}

input CharacterUpdateManyWithoutMovieInput {
  create: [CharacterCreateWithoutMovieInput!]
  connect: [CharacterWhereUniqueInput!]
  disconnect: [CharacterWhereUniqueInput!]
  delete: [CharacterWhereUniqueInput!]
  update: [CharacterUpdateWithWhereUniqueWithoutMovieInput!]
  upsert: [CharacterUpsertWithWhereUniqueWithoutMovieInput!]
}

input CharacterUpdateManyWithoutWeaponInput {
  create: [CharacterCreateWithoutWeaponInput!]
  connect: [CharacterWhereUniqueInput!]
  disconnect: [CharacterWhereUniqueInput!]
  delete: [CharacterWhereUniqueInput!]
  update: [CharacterUpdateWithWhereUniqueWithoutWeaponInput!]
  upsert: [CharacterUpsertWithWhereUniqueWithoutWeaponInput!]
}

input CharacterUpdateWithoutMovieDataInput {
  name: String
  alterEgo: String
  weapon: WeaponUpdateManyWithoutWieldedByInput
}

input CharacterUpdateWithoutWeaponDataInput {
  name: String
  alterEgo: String
  movie: MovieUpdateManyWithoutCharactersInput
}

input CharacterUpdateWithWhereUniqueWithoutMovieInput {
  where: CharacterWhereUniqueInput!
  data: CharacterUpdateWithoutMovieDataInput!
}

input CharacterUpdateWithWhereUniqueWithoutWeaponInput {
  where: CharacterWhereUniqueInput!
  data: CharacterUpdateWithoutWeaponDataInput!
}

input CharacterUpsertWithWhereUniqueWithoutMovieInput {
  where: CharacterWhereUniqueInput!
  update: CharacterUpdateWithoutMovieDataInput!
  create: CharacterCreateWithoutMovieInput!
}

input CharacterUpsertWithWhereUniqueWithoutWeaponInput {
  where: CharacterWhereUniqueInput!
  update: CharacterUpdateWithoutWeaponDataInput!
  create: CharacterCreateWithoutWeaponInput!
}

input CharacterWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CharacterWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CharacterWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CharacterWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  alterEgo: String
  """
  All values that are not equal to given value.
  """
  alterEgo_not: String
  """
  All values that are contained in given list.
  """
  alterEgo_in: [String!]
  """
  All values that are not contained in given list.
  """
  alterEgo_not_in: [String!]
  """
  All values less than the given value.
  """
  alterEgo_lt: String
  """
  All values less than or equal the given value.
  """
  alterEgo_lte: String
  """
  All values greater than the given value.
  """
  alterEgo_gt: String
  """
  All values greater than or equal the given value.
  """
  alterEgo_gte: String
  """
  All values containing the given string.
  """
  alterEgo_contains: String
  """
  All values not containing the given string.
  """
  alterEgo_not_contains: String
  """
  All values starting with the given string.
  """
  alterEgo_starts_with: String
  """
  All values not starting with the given string.
  """
  alterEgo_not_starts_with: String
  """
  All values ending with the given string.
  """
  alterEgo_ends_with: String
  """
  All values not ending with the given string.
  """
  alterEgo_not_ends_with: String
  weapon_every: WeaponWhereInput
  weapon_some: WeaponWhereInput
  weapon_none: WeaponWhereInput
  movie_every: MovieWhereInput
  movie_some: MovieWhereInput
  movie_none: MovieWhereInput
}

input CharacterWhereUniqueInput {
  id: ID
}

"""
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Movie implements Node {
  id: ID!
  name: String!
  year: Int!
  characters(where: CharacterWhereInput, orderBy: CharacterOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Character!]
}

"""
A connection to a list of items.
"""
type MovieConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [MovieEdge]!
  aggregate: AggregateMovie!
}

input MovieCreateInput {
  name: String!
  year: Int!
  characters: CharacterCreateManyWithoutMovieInput
}

input MovieCreateManyWithoutCharactersInput {
  create: [MovieCreateWithoutCharactersInput!]
  connect: [MovieWhereUniqueInput!]
}

input MovieCreateWithoutCharactersInput {
  name: String!
  year: Int!
}

"""
An edge in a connection.
"""
type MovieEdge {
  """
  The item at the end of the edge.
  """
  node: Movie!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum MovieOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  year_ASC
  year_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type MoviePreviousValues {
  id: ID!
  name: String!
  year: Int!
}

type MovieSubscriptionPayload {
  mutation: MutationType!
  node: Movie
  updatedFields: [String!]
  previousValues: MoviePreviousValues
}

input MovieSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [MovieSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [MovieSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [MovieSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: MovieWhereInput
}

input MovieUpdateInput {
  name: String
  year: Int
  characters: CharacterUpdateManyWithoutMovieInput
}

input MovieUpdateManyWithoutCharactersInput {
  create: [MovieCreateWithoutCharactersInput!]
  connect: [MovieWhereUniqueInput!]
  disconnect: [MovieWhereUniqueInput!]
  delete: [MovieWhereUniqueInput!]
  update: [MovieUpdateWithWhereUniqueWithoutCharactersInput!]
  upsert: [MovieUpsertWithWhereUniqueWithoutCharactersInput!]
}

input MovieUpdateWithoutCharactersDataInput {
  name: String
  year: Int
}

input MovieUpdateWithWhereUniqueWithoutCharactersInput {
  where: MovieWhereUniqueInput!
  data: MovieUpdateWithoutCharactersDataInput!
}

input MovieUpsertWithWhereUniqueWithoutCharactersInput {
  where: MovieWhereUniqueInput!
  update: MovieUpdateWithoutCharactersDataInput!
  create: MovieCreateWithoutCharactersInput!
}

input MovieWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [MovieWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [MovieWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [MovieWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  year: Int
  """
  All values that are not equal to given value.
  """
  year_not: Int
  """
  All values that are contained in given list.
  """
  year_in: [Int!]
  """
  All values that are not contained in given list.
  """
  year_not_in: [Int!]
  """
  All values less than the given value.
  """
  year_lt: Int
  """
  All values less than or equal the given value.
  """
  year_lte: Int
  """
  All values greater than the given value.
  """
  year_gt: Int
  """
  All values greater than or equal the given value.
  """
  year_gte: Int
  characters_every: CharacterWhereInput
  characters_some: CharacterWhereInput
  characters_none: CharacterWhereInput
}

input MovieWhereUniqueInput {
  id: ID
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""
An object with an ID
"""
interface Node {
  """
  The id of the object.
  """
  id: ID!
}

"""
Information about pagination in a connection.
"""
type PageInfo {
  """
  When paginating forwards, are there more items?
  """
  hasNextPage: Boolean!
  """
  When paginating backwards, are there more items?
  """
  hasPreviousPage: Boolean!
  """
  When paginating backwards, the cursor to continue.
  """
  startCursor: String
  """
  When paginating forwards, the cursor to continue.
  """
  endCursor: String
}

type Weapon implements Node {
  id: ID!
  name: String!
  wieldedBy(where: CharacterWhereInput, orderBy: CharacterOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Character!]
}

"""
A connection to a list of items.
"""
type WeaponConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [WeaponEdge]!
  aggregate: AggregateWeapon!
}

input WeaponCreateInput {
  name: String!
  wieldedBy: CharacterCreateManyWithoutWeaponInput
}

input WeaponCreateManyWithoutWieldedByInput {
  create: [WeaponCreateWithoutWieldedByInput!]
  connect: [WeaponWhereUniqueInput!]
}

input WeaponCreateWithoutWieldedByInput {
  name: String!
}

"""
An edge in a connection.
"""
type WeaponEdge {
  """
  The item at the end of the edge.
  """
  node: Weapon!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum WeaponOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type WeaponPreviousValues {
  id: ID!
  name: String!
}

type WeaponSubscriptionPayload {
  mutation: MutationType!
  node: Weapon
  updatedFields: [String!]
  previousValues: WeaponPreviousValues
}

input WeaponSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [WeaponSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [WeaponSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [WeaponSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: WeaponWhereInput
}

input WeaponUpdateInput {
  name: String
  wieldedBy: CharacterUpdateManyWithoutWeaponInput
}

input WeaponUpdateManyWithoutWieldedByInput {
  create: [WeaponCreateWithoutWieldedByInput!]
  connect: [WeaponWhereUniqueInput!]
  disconnect: [WeaponWhereUniqueInput!]
  delete: [WeaponWhereUniqueInput!]
  update: [WeaponUpdateWithWhereUniqueWithoutWieldedByInput!]
  upsert: [WeaponUpsertWithWhereUniqueWithoutWieldedByInput!]
}

input WeaponUpdateWithoutWieldedByDataInput {
  name: String
}

input WeaponUpdateWithWhereUniqueWithoutWieldedByInput {
  where: WeaponWhereUniqueInput!
  data: WeaponUpdateWithoutWieldedByDataInput!
}

input WeaponUpsertWithWhereUniqueWithoutWieldedByInput {
  where: WeaponWhereUniqueInput!
  update: WeaponUpdateWithoutWieldedByDataInput!
  create: WeaponCreateWithoutWieldedByInput!
}

input WeaponWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [WeaponWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [WeaponWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [WeaponWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  wieldedBy_every: CharacterWhereInput
  wieldedBy_some: CharacterWhereInput
  wieldedBy_none: CharacterWhereInput
}

input WeaponWhereUniqueInput {
  id: ID
}

type Mutation {
  createCharacter(data: CharacterCreateInput!): Character!
  createWeapon(data: WeaponCreateInput!): Weapon!
  createMovie(data: MovieCreateInput!): Movie!
  updateCharacter(data: CharacterUpdateInput!, where: CharacterWhereUniqueInput!): Character
  updateWeapon(data: WeaponUpdateInput!, where: WeaponWhereUniqueInput!): Weapon
  updateMovie(data: MovieUpdateInput!, where: MovieWhereUniqueInput!): Movie
  deleteCharacter(where: CharacterWhereUniqueInput!): Character
  deleteWeapon(where: WeaponWhereUniqueInput!): Weapon
  deleteMovie(where: MovieWhereUniqueInput!): Movie
  upsertCharacter(where: CharacterWhereUniqueInput!, create: CharacterCreateInput!, update: CharacterUpdateInput!): Character!
  upsertWeapon(where: WeaponWhereUniqueInput!, create: WeaponCreateInput!, update: WeaponUpdateInput!): Weapon!
  upsertMovie(where: MovieWhereUniqueInput!, create: MovieCreateInput!, update: MovieUpdateInput!): Movie!
  updateManyCharacters(data: CharacterUpdateInput!, where: CharacterWhereInput): BatchPayload!
  updateManyWeapons(data: WeaponUpdateInput!, where: WeaponWhereInput): BatchPayload!
  updateManyMovies(data: MovieUpdateInput!, where: MovieWhereInput): BatchPayload!
  deleteManyCharacters(where: CharacterWhereInput): BatchPayload!
  deleteManyWeapons(where: WeaponWhereInput): BatchPayload!
  deleteManyMovies(where: MovieWhereInput): BatchPayload!
}

type Query {
  characters(where: CharacterWhereInput, orderBy: CharacterOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Character]!
  weapons(where: WeaponWhereInput, orderBy: WeaponOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Weapon]!
  movies(where: MovieWhereInput, orderBy: MovieOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Movie]!
  character(where: CharacterWhereUniqueInput!): Character
  weapon(where: WeaponWhereUniqueInput!): Weapon
  movie(where: MovieWhereUniqueInput!): Movie
  charactersConnection(where: CharacterWhereInput, orderBy: CharacterOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CharacterConnection!
  weaponsConnection(where: WeaponWhereInput, orderBy: WeaponOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WeaponConnection!
  moviesConnection(where: MovieWhereInput, orderBy: MovieOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MovieConnection!
  """
  Fetches an object given its ID
  """
  node("""
  The ID of an object
  """
  id: ID!): Node
}

type Subscription {
  character(where: CharacterSubscriptionWhereInput): CharacterSubscriptionPayload
  weapon(where: WeaponSubscriptionWhereInput): WeaponSubscriptionPayload
  movie(where: MovieSubscriptionWhereInput): MovieSubscriptionPayload
}
`

export type CharacterOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'alterEgo_ASC' |
  'alterEgo_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type WeaponOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MovieOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'year_ASC' |
  'year_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType = 
  'CREATED' |
  'UPDATED' |
  'DELETED'

export interface CharacterCreateWithoutWeaponInput {
  name: String
  alterEgo: String
  movie?: MovieCreateManyWithoutCharactersInput
}

export interface CharacterWhereInput {
  AND?: CharacterWhereInput[] | CharacterWhereInput
  OR?: CharacterWhereInput[] | CharacterWhereInput
  NOT?: CharacterWhereInput[] | CharacterWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  alterEgo?: String
  alterEgo_not?: String
  alterEgo_in?: String[] | String
  alterEgo_not_in?: String[] | String
  alterEgo_lt?: String
  alterEgo_lte?: String
  alterEgo_gt?: String
  alterEgo_gte?: String
  alterEgo_contains?: String
  alterEgo_not_contains?: String
  alterEgo_starts_with?: String
  alterEgo_not_starts_with?: String
  alterEgo_ends_with?: String
  alterEgo_not_ends_with?: String
  weapon_every?: WeaponWhereInput
  weapon_some?: WeaponWhereInput
  weapon_none?: WeaponWhereInput
  movie_every?: MovieWhereInput
  movie_some?: MovieWhereInput
  movie_none?: MovieWhereInput
}

export interface WeaponUpdateInput {
  name?: String
  wieldedBy?: CharacterUpdateManyWithoutWeaponInput
}

export interface MovieUpdateWithWhereUniqueWithoutCharactersInput {
  where: MovieWhereUniqueInput
  data: MovieUpdateWithoutCharactersDataInput
}

export interface CharacterCreateInput {
  name: String
  alterEgo: String
  weapon?: WeaponCreateManyWithoutWieldedByInput
  movie?: MovieCreateManyWithoutCharactersInput
}

export interface CharacterCreateWithoutMovieInput {
  name: String
  alterEgo: String
  weapon?: WeaponCreateManyWithoutWieldedByInput
}

export interface WeaponCreateManyWithoutWieldedByInput {
  create?: WeaponCreateWithoutWieldedByInput[] | WeaponCreateWithoutWieldedByInput
  connect?: WeaponWhereUniqueInput[] | WeaponWhereUniqueInput
}

export interface MovieWhereInput {
  AND?: MovieWhereInput[] | MovieWhereInput
  OR?: MovieWhereInput[] | MovieWhereInput
  NOT?: MovieWhereInput[] | MovieWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  year?: Int
  year_not?: Int
  year_in?: Int[] | Int
  year_not_in?: Int[] | Int
  year_lt?: Int
  year_lte?: Int
  year_gt?: Int
  year_gte?: Int
  characters_every?: CharacterWhereInput
  characters_some?: CharacterWhereInput
  characters_none?: CharacterWhereInput
}

export interface WeaponCreateWithoutWieldedByInput {
  name: String
}

export interface WeaponWhereInput {
  AND?: WeaponWhereInput[] | WeaponWhereInput
  OR?: WeaponWhereInput[] | WeaponWhereInput
  NOT?: WeaponWhereInput[] | WeaponWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  wieldedBy_every?: CharacterWhereInput
  wieldedBy_some?: CharacterWhereInput
  wieldedBy_none?: CharacterWhereInput
}

export interface MovieCreateManyWithoutCharactersInput {
  create?: MovieCreateWithoutCharactersInput[] | MovieCreateWithoutCharactersInput
  connect?: MovieWhereUniqueInput[] | MovieWhereUniqueInput
}

export interface CharacterWhereUniqueInput {
  id?: ID_Input
}

export interface MovieCreateWithoutCharactersInput {
  name: String
  year: Int
}

export interface MovieWhereUniqueInput {
  id?: ID_Input
}

export interface WeaponCreateInput {
  name: String
  wieldedBy?: CharacterCreateManyWithoutWeaponInput
}

export interface CharacterUpsertWithWhereUniqueWithoutMovieInput {
  where: CharacterWhereUniqueInput
  update: CharacterUpdateWithoutMovieDataInput
  create: CharacterCreateWithoutMovieInput
}

export interface CharacterCreateManyWithoutWeaponInput {
  create?: CharacterCreateWithoutWeaponInput[] | CharacterCreateWithoutWeaponInput
  connect?: CharacterWhereUniqueInput[] | CharacterWhereUniqueInput
}

export interface CharacterUpdateWithWhereUniqueWithoutMovieInput {
  where: CharacterWhereUniqueInput
  data: CharacterUpdateWithoutMovieDataInput
}

export interface MovieUpsertWithWhereUniqueWithoutCharactersInput {
  where: MovieWhereUniqueInput
  update: MovieUpdateWithoutCharactersDataInput
  create: MovieCreateWithoutCharactersInput
}

export interface MovieUpdateInput {
  name?: String
  year?: Int
  characters?: CharacterUpdateManyWithoutMovieInput
}

export interface MovieCreateInput {
  name: String
  year: Int
  characters?: CharacterCreateManyWithoutMovieInput
}

export interface CharacterUpdateWithoutWeaponDataInput {
  name?: String
  alterEgo?: String
  movie?: MovieUpdateManyWithoutCharactersInput
}

export interface CharacterCreateManyWithoutMovieInput {
  create?: CharacterCreateWithoutMovieInput[] | CharacterCreateWithoutMovieInput
  connect?: CharacterWhereUniqueInput[] | CharacterWhereUniqueInput
}

export interface CharacterUpdateManyWithoutWeaponInput {
  create?: CharacterCreateWithoutWeaponInput[] | CharacterCreateWithoutWeaponInput
  connect?: CharacterWhereUniqueInput[] | CharacterWhereUniqueInput
  disconnect?: CharacterWhereUniqueInput[] | CharacterWhereUniqueInput
  delete?: CharacterWhereUniqueInput[] | CharacterWhereUniqueInput
  update?: CharacterUpdateWithWhereUniqueWithoutWeaponInput[] | CharacterUpdateWithWhereUniqueWithoutWeaponInput
  upsert?: CharacterUpsertWithWhereUniqueWithoutWeaponInput[] | CharacterUpsertWithWhereUniqueWithoutWeaponInput
}

export interface MovieUpdateWithoutCharactersDataInput {
  name?: String
  year?: Int
}

export interface MovieSubscriptionWhereInput {
  AND?: MovieSubscriptionWhereInput[] | MovieSubscriptionWhereInput
  OR?: MovieSubscriptionWhereInput[] | MovieSubscriptionWhereInput
  NOT?: MovieSubscriptionWhereInput[] | MovieSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: MovieWhereInput
}

export interface CharacterUpdateInput {
  name?: String
  alterEgo?: String
  weapon?: WeaponUpdateManyWithoutWieldedByInput
  movie?: MovieUpdateManyWithoutCharactersInput
}

export interface WeaponWhereUniqueInput {
  id?: ID_Input
}

export interface WeaponUpdateManyWithoutWieldedByInput {
  create?: WeaponCreateWithoutWieldedByInput[] | WeaponCreateWithoutWieldedByInput
  connect?: WeaponWhereUniqueInput[] | WeaponWhereUniqueInput
  disconnect?: WeaponWhereUniqueInput[] | WeaponWhereUniqueInput
  delete?: WeaponWhereUniqueInput[] | WeaponWhereUniqueInput
  update?: WeaponUpdateWithWhereUniqueWithoutWieldedByInput[] | WeaponUpdateWithWhereUniqueWithoutWieldedByInput
  upsert?: WeaponUpsertWithWhereUniqueWithoutWieldedByInput[] | WeaponUpsertWithWhereUniqueWithoutWieldedByInput
}

export interface CharacterUpdateWithoutMovieDataInput {
  name?: String
  alterEgo?: String
  weapon?: WeaponUpdateManyWithoutWieldedByInput
}

export interface CharacterUpsertWithWhereUniqueWithoutWeaponInput {
  where: CharacterWhereUniqueInput
  update: CharacterUpdateWithoutWeaponDataInput
  create: CharacterCreateWithoutWeaponInput
}

export interface MovieUpdateManyWithoutCharactersInput {
  create?: MovieCreateWithoutCharactersInput[] | MovieCreateWithoutCharactersInput
  connect?: MovieWhereUniqueInput[] | MovieWhereUniqueInput
  disconnect?: MovieWhereUniqueInput[] | MovieWhereUniqueInput
  delete?: MovieWhereUniqueInput[] | MovieWhereUniqueInput
  update?: MovieUpdateWithWhereUniqueWithoutCharactersInput[] | MovieUpdateWithWhereUniqueWithoutCharactersInput
  upsert?: MovieUpsertWithWhereUniqueWithoutCharactersInput[] | MovieUpsertWithWhereUniqueWithoutCharactersInput
}

export interface WeaponUpsertWithWhereUniqueWithoutWieldedByInput {
  where: WeaponWhereUniqueInput
  update: WeaponUpdateWithoutWieldedByDataInput
  create: WeaponCreateWithoutWieldedByInput
}

export interface WeaponUpdateWithoutWieldedByDataInput {
  name?: String
}

export interface WeaponUpdateWithWhereUniqueWithoutWieldedByInput {
  where: WeaponWhereUniqueInput
  data: WeaponUpdateWithoutWieldedByDataInput
}

export interface CharacterUpdateWithWhereUniqueWithoutWeaponInput {
  where: CharacterWhereUniqueInput
  data: CharacterUpdateWithoutWeaponDataInput
}

export interface CharacterUpdateManyWithoutMovieInput {
  create?: CharacterCreateWithoutMovieInput[] | CharacterCreateWithoutMovieInput
  connect?: CharacterWhereUniqueInput[] | CharacterWhereUniqueInput
  disconnect?: CharacterWhereUniqueInput[] | CharacterWhereUniqueInput
  delete?: CharacterWhereUniqueInput[] | CharacterWhereUniqueInput
  update?: CharacterUpdateWithWhereUniqueWithoutMovieInput[] | CharacterUpdateWithWhereUniqueWithoutMovieInput
  upsert?: CharacterUpsertWithWhereUniqueWithoutMovieInput[] | CharacterUpsertWithWhereUniqueWithoutMovieInput
}

export interface CharacterSubscriptionWhereInput {
  AND?: CharacterSubscriptionWhereInput[] | CharacterSubscriptionWhereInput
  OR?: CharacterSubscriptionWhereInput[] | CharacterSubscriptionWhereInput
  NOT?: CharacterSubscriptionWhereInput[] | CharacterSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CharacterWhereInput
}

export interface WeaponSubscriptionWhereInput {
  AND?: WeaponSubscriptionWhereInput[] | WeaponSubscriptionWhereInput
  OR?: WeaponSubscriptionWhereInput[] | WeaponSubscriptionWhereInput
  NOT?: WeaponSubscriptionWhereInput[] | WeaponSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: WeaponWhereInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface MoviePreviousValues {
  id: ID_Output
  name: String
  year: Int
}

export interface BatchPayload {
  count: Long
}

export interface Character extends Node {
  id: ID_Output
  name: String
  alterEgo: String
  weapon?: Weapon[]
  movie?: Movie[]
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface WeaponSubscriptionPayload {
  mutation: MutationType
  node?: Weapon
  updatedFields?: String[]
  previousValues?: WeaponPreviousValues
}

export interface Weapon extends Node {
  id: ID_Output
  name: String
  wieldedBy?: Character[]
}

export interface AggregateMovie {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface MovieEdge {
  node: Movie
  cursor: String
}

export interface AggregateWeapon {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface CharacterConnection {
  pageInfo: PageInfo
  edges: CharacterEdge[]
  aggregate: AggregateCharacter
}

/*
 * A connection to a list of items.

 */
export interface WeaponConnection {
  pageInfo: PageInfo
  edges: WeaponEdge[]
  aggregate: AggregateWeapon
}

/*
 * An edge in a connection.

 */
export interface CharacterEdge {
  node: Character
  cursor: String
}

export interface Movie extends Node {
  id: ID_Output
  name: String
  year: Int
  characters?: Character[]
}

export interface CharacterPreviousValues {
  id: ID_Output
  name: String
  alterEgo: String
}

export interface CharacterSubscriptionPayload {
  mutation: MutationType
  node?: Character
  updatedFields?: String[]
  previousValues?: CharacterPreviousValues
}

export interface WeaponPreviousValues {
  id: ID_Output
  name: String
}

export interface MovieSubscriptionPayload {
  mutation: MutationType
  node?: Movie
  updatedFields?: String[]
  previousValues?: MoviePreviousValues
}

export interface AggregateCharacter {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface WeaponEdge {
  node: Weapon
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface MovieConnection {
  pageInfo: PageInfo
  edges: MovieEdge[]
  aggregate: AggregateMovie
}

/*
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export interface Schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

export type Query = {
  characters: (args: { where?: CharacterWhereInput, orderBy?: CharacterOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Character[]>
  weapons: (args: { where?: WeaponWhereInput, orderBy?: WeaponOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Weapon[]>
  movies: (args: { where?: MovieWhereInput, orderBy?: MovieOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Movie[]>
  character: (args: { where: CharacterWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Character | null>
  weapon: (args: { where: WeaponWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Weapon | null>
  movie: (args: { where: MovieWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Movie | null>
  charactersConnection: (args: { where?: CharacterWhereInput, orderBy?: CharacterOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<CharacterConnection>
  weaponsConnection: (args: { where?: WeaponWhereInput, orderBy?: WeaponOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<WeaponConnection>
  moviesConnection: (args: { where?: MovieWhereInput, orderBy?: MovieOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<MovieConnection>
  node: (args: { id: ID_Output }, info?: GraphQLResolveInfo | string) => Promise<Node | null>
}

export type Mutation = {
  createCharacter: (args: { data: CharacterCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Character>
  createWeapon: (args: { data: WeaponCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Weapon>
  createMovie: (args: { data: MovieCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Movie>
  updateCharacter: (args: { data: CharacterUpdateInput, where: CharacterWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Character | null>
  updateWeapon: (args: { data: WeaponUpdateInput, where: WeaponWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Weapon | null>
  updateMovie: (args: { data: MovieUpdateInput, where: MovieWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Movie | null>
  deleteCharacter: (args: { where: CharacterWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Character | null>
  deleteWeapon: (args: { where: WeaponWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Weapon | null>
  deleteMovie: (args: { where: MovieWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Movie | null>
  upsertCharacter: (args: { where: CharacterWhereUniqueInput, create: CharacterCreateInput, update: CharacterUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Character>
  upsertWeapon: (args: { where: WeaponWhereUniqueInput, create: WeaponCreateInput, update: WeaponUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Weapon>
  upsertMovie: (args: { where: MovieWhereUniqueInput, create: MovieCreateInput, update: MovieUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Movie>
  updateManyCharacters: (args: { data: CharacterUpdateInput, where?: CharacterWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyWeapons: (args: { data: WeaponUpdateInput, where?: WeaponWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyMovies: (args: { data: MovieUpdateInput, where?: MovieWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyCharacters: (args: { where?: CharacterWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyWeapons: (args: { where?: WeaponWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyMovies: (args: { where?: MovieWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
}

export type Subscription = {
  character: (args: { where?: CharacterSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<CharacterSubscriptionPayload>>
  weapon: (args: { where?: WeaponSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<WeaponSubscriptionPayload>>
  movie: (args: { where?: MovieSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<MovieSubscriptionPayload>>
}

export class Prisma extends BasePrisma {
  
  constructor({ endpoint, secret, fragmentReplacements, debug }: BasePrismaOptions) {
    super({ typeDefs, endpoint, secret, fragmentReplacements, debug });
  }

  exists = {
    Character: (where: CharacterWhereInput): Promise<boolean> => super.existsDelegate('query', 'characters', { where }, {}, '{ id }'),
    Weapon: (where: WeaponWhereInput): Promise<boolean> => super.existsDelegate('query', 'weapons', { where }, {}, '{ id }'),
    Movie: (where: MovieWhereInput): Promise<boolean> => super.existsDelegate('query', 'movies', { where }, {}, '{ id }')
  }

  query: Query = {
    characters: (args, info): Promise<Character[]> => super.delegate('query', 'characters', args, {}, info),
    weapons: (args, info): Promise<Weapon[]> => super.delegate('query', 'weapons', args, {}, info),
    movies: (args, info): Promise<Movie[]> => super.delegate('query', 'movies', args, {}, info),
    character: (args, info): Promise<Character | null> => super.delegate('query', 'character', args, {}, info),
    weapon: (args, info): Promise<Weapon | null> => super.delegate('query', 'weapon', args, {}, info),
    movie: (args, info): Promise<Movie | null> => super.delegate('query', 'movie', args, {}, info),
    charactersConnection: (args, info): Promise<CharacterConnection> => super.delegate('query', 'charactersConnection', args, {}, info),
    weaponsConnection: (args, info): Promise<WeaponConnection> => super.delegate('query', 'weaponsConnection', args, {}, info),
    moviesConnection: (args, info): Promise<MovieConnection> => super.delegate('query', 'moviesConnection', args, {}, info),
    node: (args, info): Promise<Node | null> => super.delegate('query', 'node', args, {}, info)
  }

  mutation: Mutation = {
    createCharacter: (args, info): Promise<Character> => super.delegate('mutation', 'createCharacter', args, {}, info),
    createWeapon: (args, info): Promise<Weapon> => super.delegate('mutation', 'createWeapon', args, {}, info),
    createMovie: (args, info): Promise<Movie> => super.delegate('mutation', 'createMovie', args, {}, info),
    updateCharacter: (args, info): Promise<Character | null> => super.delegate('mutation', 'updateCharacter', args, {}, info),
    updateWeapon: (args, info): Promise<Weapon | null> => super.delegate('mutation', 'updateWeapon', args, {}, info),
    updateMovie: (args, info): Promise<Movie | null> => super.delegate('mutation', 'updateMovie', args, {}, info),
    deleteCharacter: (args, info): Promise<Character | null> => super.delegate('mutation', 'deleteCharacter', args, {}, info),
    deleteWeapon: (args, info): Promise<Weapon | null> => super.delegate('mutation', 'deleteWeapon', args, {}, info),
    deleteMovie: (args, info): Promise<Movie | null> => super.delegate('mutation', 'deleteMovie', args, {}, info),
    upsertCharacter: (args, info): Promise<Character> => super.delegate('mutation', 'upsertCharacter', args, {}, info),
    upsertWeapon: (args, info): Promise<Weapon> => super.delegate('mutation', 'upsertWeapon', args, {}, info),
    upsertMovie: (args, info): Promise<Movie> => super.delegate('mutation', 'upsertMovie', args, {}, info),
    updateManyCharacters: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyCharacters', args, {}, info),
    updateManyWeapons: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyWeapons', args, {}, info),
    updateManyMovies: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyMovies', args, {}, info),
    deleteManyCharacters: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyCharacters', args, {}, info),
    deleteManyWeapons: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyWeapons', args, {}, info),
    deleteManyMovies: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyMovies', args, {}, info)
  }

  subscription: Subscription = {
    character: (args, infoOrQuery): Promise<AsyncIterator<CharacterSubscriptionPayload>> => super.delegateSubscription('character', args, {}, infoOrQuery),
    weapon: (args, infoOrQuery): Promise<AsyncIterator<WeaponSubscriptionPayload>> => super.delegateSubscription('weapon', args, {}, infoOrQuery),
    movie: (args, infoOrQuery): Promise<AsyncIterator<MovieSubscriptionPayload>> => super.delegateSubscription('movie', args, {}, infoOrQuery)
  }
}