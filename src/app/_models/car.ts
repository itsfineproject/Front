export class Car {
  id: number;
  usedId: number;
  carNumber: string;
  carName: string;
  comment: string;

  constructor(
              usedId: number,
              carNumber: string,
              carName: string,
              comment: string) {

    this.usedId = usedId;
    this.carNumber = carNumber;
    this.carName = carName;
    this.comment = comment;
  }
}
