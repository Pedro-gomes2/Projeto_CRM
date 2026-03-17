import { IsDateString, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl, Length } from "class-validator";
import { NivelExperiencia } from "../enum/nivel-expeciencia.enum";
import { Disponibilidade } from "../enum/disponibilidade.enum";


export class CreateCandidataDto {

  @IsString()
  @IsNotEmpty()
  @Length(3, 120)
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  telefone: string;

  @IsDateString()
  data_nascimento: Date;

  @IsString()
  cidade: string;

  @IsString()
  estado: string;

  @IsString()
  area_profissional: string;

  @IsEnum(NivelExperiencia)
  nivel_experiencia: NivelExperiencia;

  @IsOptional()
  @IsNumber()
  pretensao_salarial?: number;

  @IsOptional()
  @IsUrl()
  linkedin?: string;

  @IsOptional()
  @IsUrl()
  portfolio?: string;

  @IsEnum(Disponibilidade)
  disponibilidade: Disponibilidade;

}