export class Car {
  id: number;
  userId: number;
  carNumber: string;
  carName: string;
  carPassportNumber: string;
  comment: string;

  constructor(
              id: number,
              userId: number,
              carNumber: string,
              carName: string,
              carPassportNumber: string,
              comment: string) {

    this.id = id;
    this.userId = userId;
    this.carNumber = carNumber;
    this.carName = carName;
    this.carPassportNumber = carPassportNumber;
    this.comment = comment;
  }
}
