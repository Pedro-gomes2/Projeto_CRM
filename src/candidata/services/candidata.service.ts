import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Candidata } from "../entities/candidata.entity";
import { CreateCandidataDto } from "../dto/create-candidata.dto";
import { NivelExperiencia } from "../enum/nivel-expeciencia.enum";
import { Disponibilidade } from "../enum/disponibilidade.enum";


//O recomendado em tese seria criar um Many to Many entre candidata e oportunidade
//criando assim uma nova tabela candidatura, porem isso iria fugir do escorpo

@Injectable()

export class CandidataService{
    constructor(
        @InjectRepository(Candidata)
        private candidataRepository: Repository<Candidata>,
    ){}

//Procurar tudo
async findAll(): Promise<Candidata[]>{
    return await this.candidataRepository.find({})
}  

//Procurar por ID
async findById(id: number): Promise<Candidata>{
    const candidata = await this.candidataRepository.findOne({
        where:{id}
    });

    if(!candidata){
        throw new HttpException('Candidata não encontrada!', HttpStatus.NOT_FOUND);
    }

    return candidata;
}

//Procurar por Nome
async findByNome(nome: string): Promise<Candidata[]>{
    return await this.candidataRepository.find({
        where:{ nome: ILike(`%${nome}`)}
    })
}


//Procurar por Experiencia 
async findByNivelExperiencia(nivel_experiencia: NivelExperiencia): Promise<Candidata[]> {
return await this.candidataRepository.find({
  where: {nivel_experiencia}
});
}

// Procurar Candidata por Localização
async findByLocalizacao(localizacao: string): Promise<Candidata[]> {
return await this.candidataRepository.find({
    where: { localizacao: ILike(`%${localizacao}%`) }
});
}

//Procurar Candidata por Area de atuação
async findByDisponibilidade( disponibilidade: Disponibilidade): Promise<Candidata[]>{
    return await this.candidataRepository.find({
        where: {disponibilidade}
    });
}


//Criação da Candidata
async create(dto: CreateCandidataDto): Promise<Candidata>{
    const candidata = this.candidataRepository.create(dto);
    return await this.candidataRepository.save(candidata);
}

//Atualização de Candidata
async update(id:number, candidata: Candidata): Promise<Candidata>{
    await this.findById(id);
    candidata.id = id;
    return await this.candidataRepository.save(candidata);
}

async remove(id: number): Promise<DeleteResult>{
    await this.findById(id);
    return await this.candidataRepository.delete(id);
}

}