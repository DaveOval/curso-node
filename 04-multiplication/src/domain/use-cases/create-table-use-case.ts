export interface CreateTableUseCase {
    execute: ( options: CreateTableOptions )=> string;
}

export interface CreateTableOptions {
    base: number;
    limit: number;
}



export class CreateTable implements CreateTableUseCase {

    constructor(){}

    execute({ base, limit }: CreateTableOptions ){
        let ouputMessage = ""
        for ( let i = 1; i <= limit; i++ ){
            ouputMessage += `${ base } x ${ i } = ${ base * i }\n`;
        };
        return ouputMessage
    }

}