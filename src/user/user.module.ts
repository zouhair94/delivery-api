import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from './user.schema';
import * as bcrypt from 'bcrypt';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import {} from 'jwtModule';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          const schema = userSchema;
          return schema;
        },
      },
    ]),
    PassportModule,
    JwtModule.register({
      secret: '3x7r4s3cre7',
      signOptions: { expiresIn: '2days' },
    }),
  ],
  providers: [UserService, UserResolver],
  exports: [JwtModule, UserService, UserResolver],
})
export class UserModule {}
