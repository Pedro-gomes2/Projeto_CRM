import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { OportunidadeModule } from './oportunidade/oportunidade.module';
import { Oportunidade } from './oportunidade/entities/oportunidade.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { CandidataModule } from './candidata/candidata.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'db_crmproject',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //Synchronize é para sincronizar as funções, em produção deixamos a opção em false
    synchronize: true,
  }), OportunidadeModule, UsuarioModule, CandidataModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
