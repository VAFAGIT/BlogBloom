import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { RE}


@Injectable()
export class AppService {
    constructor( 
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ){

    }    
        

    
}