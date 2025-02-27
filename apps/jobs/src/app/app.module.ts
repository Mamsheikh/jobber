import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { JobsModule } from './jobs.module';
import { GraphQLModule } from '@nestjs/graphql';
import { LoggerModule } from '@jobber/nestjs';
import { GqlLogginPlugin } from '@jobber/graphql';

@Module({
  imports: [
    LoggerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    JobsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      plugins: [new GqlLogginPlugin()],
      driver: ApolloDriver,
      playground: {
        settings: {
          'request.credentials': 'include',
        },
      },
    }),
  ],
})
export class AppModule {}
