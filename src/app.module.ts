import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria/entity/categoria.entity';
import { Produto } from './produto/entities/produto.entity';
import { ProdutoModule } from './produto/produto.module';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'db_loja_games',
    entities: [Produto, Categoria],
    synchronize: true,
    logging: true,
    bigNumberStrings : false,
  }),
  ProdutoModule,
  CategoriaModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
