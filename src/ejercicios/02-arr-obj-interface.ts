/*
    ===== Código de TypeScript =====
*/

let habilidades = ['Bash','Contuner', 'Healing'];

interface personaje{
    nombre: String;
    hp: number;
    habilidades: string[];
    puebloNatal?: string
}