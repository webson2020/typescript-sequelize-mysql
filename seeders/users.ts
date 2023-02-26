import { v4 as uuidv4 } from 'uuid';

export const users = [
    {
        id: uuidv4(),
        name: 'Nicolás Rossetti',
        email: 'nrosettiossa@gmail.com',
        password: 'abc123'

    },{
        id: uuidv4(),
        name: 'Mauricio Flores',
        email: 'mf@gmail.com',
        password: 'def456'
    },{
        id: uuidv4(),
        name: 'Diego Arriesgado',
        email: 'sync@gmail.com',
        password: 'ghi789'
    }
]