import { Component } from 'react';
import BpkCalendar, {
  CALENDAR_SELECTION_TYPE,
} from '@skyscanner/backpack-web/bpk-component-calendar';
import BpkInput, {
  INPUT_TYPES,
} from '@skyscanner/backpack-web/bpk-component-input';
import format from 'date-fns/format';
import './App.scss'; // Importing the SCSS file for styling
import { BpkButtonV2, BUTTON_TYPES, SIZE_TYPES } from '@skyscanner/backpack-web/bpk-component-button'; // Importing BpkButtonV2
import { withButtonAlignment, withRtlSupport } from '@skyscanner/backpack-web/bpk-component-icon'; // Importing button alignment and RTL support
import ArrowIcon from '@skyscanner/backpack-web/bpk-component-icon/sm/long-arrow-right'; // Importing arrow icon

// Wrapping the arrow icon with alignment and RTL support
const AlignedArrowIcon = withButtonAlignment(withRtlSupport(ArrowIcon));

const formatDateFull = (date) => format(date, 'EEEE, do MMMM yyyy');
const formatMonth = (date) => format(date, 'MMMM yyyy');
const daysOfWeek = [
  {
    name: 'Sunday',
    nameAbbr: 'Sun',
    index: 0,
    isWeekend: true,
  },
  {
    name: 'Monday',
    nameAbbr: 'Mon',
    index: 1,
    isWeekend: false,
  },
  {
    name: 'Tuesday',
    nameAbbr: 'Tues',
    index: 2,
    isWeekend: false,
  },
  {
    name: 'Wednesday',
    nameAbbr: 'Wed',
    index: 3,
    isWeekend: false,
  },
  {
    name: 'Thursday',
    nameAbbr: 'Thur',
    index: 4,
    isWeekend: false,
  },
  {
    name: 'Friday',
    nameAbbr: 'Fri',
    index: 5,
    isWeekend: false,
  },
  {
    name: 'Saturday',
    nameAbbr: 'Sat',
    index: 6,
    isWeekend: true,
  },
];

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      selectionConfiguration: {
        type: CALENDAR_SELECTION_TYPE.single,
        date: null,
      },
    };
  }

  handleDateSelect = (date) => {
    this.setState({
      selectionConfiguration: {
        type: CALENDAR_SELECTION_TYPE.single,
        date: date,
      },
    });
  };
  
  render() {
    return (
      <div className="App">
        {/* Updated header text */}
        <header
className="App-header">
          <h3>Flight Schedule</h3>
        </header>

        {/* BpkInput component */}
        <BpkInput
          id="dateInput"
          className="centered-input"
          type={INPUT_TYPES.text}
          name="date"
          value={(this.state.selectionConfiguration.date || '').toString()}
          placeholder="Departure date"
        />

        {/* BpkCalendar component */}
        <BpkCalendar
          id="calendar"
          onDateSelect={this.handleDateSelect}
          formatMonth={formatMonth}
          formatDateFull={formatDateFull}
          daysOfWeek={daysOfWeek}
          weekStartsOn={1}
          changeMonthLabel="Change month"
          nextMonthLabel="Next month"
          previousMonthLabel="Previous month"
          selectionConfiguration={this.state.selectionConfiguration}
        />

        

        {/* Button with Arrow Icon */}
        <BpkButtonV2 type={BUTTON_TYPES.primary} size={SIZE_TYPES.small} onClick={() => alert('It works!')}>
  Continue
  <AlignedArrowIcon />
</BpkButtonV2>

      </div>
    );
  }
}
