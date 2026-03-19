import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OportunidadeModule } from './oportunidade/oportunidade.module';
import { Oportunidade } from './oportunidade/entities/oportunidade.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { CandidataModule } from './candidata/candidata.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ProdService } from './data/prod.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useClass: ProdService,
      imports: [ConfigModule],

    }),
    OportunidadeModule,
    UsuarioModule,
    CandidataModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
