export class Fine {
  id: number;
  carId: number;
  sum: number;
  dateTime: string;
  parkingId: number;
  isPaid: boolean;
  parkingAddress;

  constructor(  id: number,
                carId: number,
                sum: number,
                dateTime: string,
                parkingId: number,
                isPaid: boolean) {

     this.id = id;
     this.carId = carId;
     this.sum = sum;
     this.dateTime = dateTime;
     this.parkingId = parkingId;
     this.isPaid = isPaid;
     }
}
