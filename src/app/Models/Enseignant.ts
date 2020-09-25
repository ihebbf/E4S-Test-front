export class Enseignant {
  _id: string;
  email: string;
  password: string;
  classe: string;
  matieres:[
    {
      note: string,
      _id: string,
      nom: string,
      coefficient: number

    }]
}
