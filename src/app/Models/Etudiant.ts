export class Etudiant {
  _id: string;
  email: string;
  password: string;
  classe: string;
  role:string
  matieres:[
    {
      note: string,
      _id: string,
      nom: string,
      coefficient: number

    }]
}
