import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";
import { Categoria } from "src/categoria/entity/categoria.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:"tb_produtos"})
export class Produto{
    
    @PrimaryGeneratedColumn() // chave incremental
    id: number;
    
    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()  //não aceitar titulo vazio 
    @Column({length: 100, nullable: false}) //definir o tamanho e não aceitar o valor
    nome: string;
  
    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    descricao: string;

    @IsNumber({maxDecimalPlaces: 2})
    @IsNotEmpty()
    @Column({type: "decimal", precision: 10, scale: 2})
    preco: number;

    @Column()
    @IsNotEmpty()
    foto: string;

    @ManyToOne(() => Categoria,(Categoria) => Categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria:Categoria
}
