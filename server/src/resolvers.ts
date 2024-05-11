import queryTwitterResolvers from './resolvers/Query';
import Db, { DbTweet, DbUser } from './db';
import { Resolvers } from './resolvers-types.generated';
import userTwitterResolver from './resolvers/User';
import tweetTwitterResolver from './resolvers/Tweet';
import mutationTwitterResolver from './resolvers/Mutation';
import trendTwitterResolver from './resolvers/Trend';

export interface TwitterResolverContext {
  db: Db;
  dbTweetCache: Record<string, DbTweet>;
  dbUserCache: Record<string, DbUser>;
  dbTweetToFavoriteCountMap: Record<string, number>;
}

const resolvers: Resolvers<TwitterResolverContext> = {
  Query: queryTwitterResolvers,
  Mutation: mutationTwitterResolver,
  User: userTwitterResolver,
  Tweet: tweetTwitterResolver,
  Trend: trendTwitterResolver,
};
export default resolvers;
