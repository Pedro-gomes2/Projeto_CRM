import { Transform, TransformFnParams } from "class-transformer"
import { IsDateString, IsEmail, IsNotEmpty, MinLength } from "class-validator"
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

import { Oportunidade } from "../../oportunidade/entities/oportunidade.entity"
import { ApiProperty } from "@nestjs/swagger"


@Entity({name: "tb_usuarios"})
export class Usuario {

    @PrimaryGeneratedColumn() 
    @ApiProperty()
    id: number
    

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 255, nullable: false}) 
    @ApiProperty()
    nome: string


    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsEmail()
    @IsNotEmpty()
    @Column({length: 255, nullable: false })
    @ApiProperty()
    usuario: string


    @Transform(({ value }: TransformFnParams) => value?.trim())
    @MinLength(8)
    @IsNotEmpty()
    @Column({length: 255, nullable: false }) 
    @ApiProperty()
    senha: string

    @Column() 
    @ApiProperty()
    foto: string


    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsDateString()
    @Column({type: "date"})
    @ApiProperty()
    dataNascimento: Date

    @CreateDateColumn({ type: "timestamp" })
    @ApiProperty()    
    dataCriacao: Date

    
    //Relacionamento com Oportunidade
    @ApiProperty() 
    @OneToMany(() => Oportunidade,(oportunidade) => oportunidade.usuario)
    oportunidade: Oportunidade[];



   

} 