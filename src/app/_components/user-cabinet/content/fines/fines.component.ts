import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {Subscription} from 'rxjs';
import {CarFineService} from '../../../../_services/car-fine.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Fine} from '../../../../_models/fine';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-fines',
  templateUrl: './fines.component.html',
  styleUrls: ['./fines.component.css'],
  animations: [
    trigger('fullInfo', [
      state('open', style({})),
      state('closed', style({height: '0'})),

      transition('closed=>open', [animate('500ms')]),
      transition('open=>closed', [animate('300ms')])
    ])]
})
export class FinesComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'dateTime', 'parkingAddress', 'isPaid'];
  columns = ['id', 'sum', 'dateTime', 'parkingAddress'];
  dataSubscription: Subscription;
  title = {
    id: 'ID', sum: 'Sum', dateTime: 'Date', parkingAddress: 'Parking Address', isPaid: 'Status'
  };
  carId: number;
  expandedRow = null;

  constructor(private finesService: CarFineService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.carId = this.route.snapshot.params['carId'];
    this.finesService.getFinesWithoutAddress(this.carId).subscribe(res => this.dataSource.data = res)
      .add(this.finesService.getAddresses(this.carId).subscribe(res => console.log(res)));
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}
