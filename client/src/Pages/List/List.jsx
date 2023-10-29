import { useState } from "react";
import "./List.scss";
import Navbar from "../../Components/NavBarSecond/NavBarSecond";
import Header from "../../Components/Header/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../Components/SeachItems/SearchItem";
import useFetch from "../../hooks/usefetch.js";

export default function List() {
  const location = useLocation();

  console.log(location);

  const [Destinations, setDestinations] = useState(location.state.Destinations);

  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [option, setOption] = useState(location.state.option);

  const { data, loading } = useFetch(`/hotels?city=${Destinations}`);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={Destinations} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "dd/MM/yyyy"
              )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  ranges={date}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOption">
                <div className="lsOptionItem">
                  <span className="IsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="inOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="IsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="inOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="IsOptionText">Adult</span>
                  <input
                    type="number"
                    className="inOptionInput"
                    placeholder={option.adult}
                    min={1}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="IsOptionText">Children</span>
                  <input
                    type="number"
                    className="inOptionInput"
                    placeholder={option.children}
                    min={0}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="IsOptionText">Room</span>
                  <input
                    type="number"
                    className="inOptionInput"
                    placeholder={option.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button className="listBtn">Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
}
