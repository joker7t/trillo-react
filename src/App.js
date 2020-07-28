import React from 'react';
import './sass/main.scss';
import { ReactComponent as MagnifyingGlass } from './img/SVG/magnifying-glass.svg';
import { ReactComponent as Bookmark } from './img/SVG/bookmark.svg';
import { ReactComponent as Chat } from './img/SVG/chat.svg';
import { ReactComponent as Home } from './img/SVG/home.svg';
import { ReactComponent as AircraftTakeOff } from './img/SVG/aircraft-take-off.svg';
import { ReactComponent as Key } from './img/SVG/key.svg';
import { ReactComponent as Map } from './img/SVG/map.svg';
import { ReactComponent as Star } from './img/SVG/star.svg';
import { ReactComponent as LocationPin } from './img/SVG/location-pin.svg';
import Logo from './img/logo.png';
import User from './img/user.JPG';
import User1 from './img/user-1.jpg';
import User2 from './img/user-2.jpg';
import User3 from './img/user-3.jpg';
import User4 from './img/user-4.jpg';
import User5 from './img/user-5.jpg';
import User6 from './img/user-6.jpg';
import Hotel1 from './img/hotel-1.jpg';
import Hotel2 from './img/hotel-2.jpg';
import Hotel3 from './img/hotel-3.jpg';

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src={Logo} alt="trillo logo" className="logo" />

        <form action="#" className="search">
          <input type="text" className="search__input" placeholder="Search hotels" />
          <button className="search__button">
            <svg className="search__icon">
              <MagnifyingGlass />
            </svg>
          </button>
        </form>

        <nav className="user-nav">
          <div className="user-nav__icon-box">
            <svg className="user-nav__icon">
              <Bookmark />
            </svg>
            <span className="user-nav__notification">7</span>
          </div>
          <div className="user-nav__icon-box">
            <svg className="user-nav__icon">
              <Chat />
            </svg>
            <span className="user-nav__notification">13</span>
          </div>
          <div className="user-nav__user">
            <img src={User} alt="User" className="user-nav__user-photo" style={{ width: '35px' }} />
            <span className="user-nav__user-name">Toan</span>
          </div>
        </nav>
      </header>

      <div className="content">
        <nav className="sidebar">
          <ul className="side-nav">
            <li className="side-nav__item side-nav__item--active">
              <a href="#" className="side-nav__link">
                <svg className="side-nav__icon">
                  <Home />
                </svg>
                <span>Hotel</span>
              </a>
            </li>
            <li className="side-nav__item">
              <a href="#" className="side-nav__link">
                <svg className="side-nav__icon">
                  <AircraftTakeOff />
                </svg>
                <span>Flight</span>
              </a>
            </li>
            <li className="side-nav__item">
              <a href="#" className="side-nav__link">
                <svg className="side-nav__icon">
                  <Key />
                </svg>
                <span>Car rental</span>
              </a>
            </li>
            <li className="side-nav__item">
              <a href="#" className="side-nav__link">
                <svg className="side-nav__icon">
                  <Map />
                </svg>
                <span>Tours</span>
              </a>
            </li>
          </ul>

          <div className="legal">
            &copy; 2020 by trillo. All rights reserved.
                </div>
        </nav>



        <main className="hotel-view">
          <div className="gallery">
            <figure className="gallery__item">
              <img src={Hotel1} alt="hotel 1" className="gallery__photo" />
            </figure>
            <figure className="gallery__item">
              <img src={Hotel2} alt="hotel 2" className="gallery__photo" />
            </figure>
            <figure className="gallery__item">
              <img src={Hotel3} alt="hotel 3" className="gallery__photo" />
            </figure>
          </div>

          <div className="overview">
            <h1 className="overview__heading">
              Hotel Las Palmas
                    </h1>

            <div className='overview__secondary-container'>
              <div className="overview__stars">
                <svg className="overview__icon-star">
                  <Star />
                </svg>
                <svg className="overview__icon-star">
                  <Star />
                </svg>
                <svg className="overview__icon-star">
                  <Star />
                </svg>
                <svg className="overview__icon-star">
                  <Star />
                </svg>
                <svg className="overview__icon-star">
                  <Star />
                </svg>
              </div>

              <div className="overview__location">
                <svg className="overview__icon-location">
                  <LocationPin />
                </svg>
                <button className="btn-inline">Albufeira, Portugal</button>
              </div>
            </div>
            <div className="overview__rating">
              <div className="overview__rating-average">8.6</div>
              <div className="overview__rating-count">429 votes</div>
            </div>
          </div>

          <div className="detail">
            <div className="description">
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis
                ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae
                architecto voluptate.
                        </p>
              <p className="paragraph">
                Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus,
                inventore iure aliquid aliquam.
              </p>
              <ul className="list">
                <li className="list__item">Close to the beach</li>
                <li className="list__item">Breakfast included</li>
                <li className="list__item">Free airport shuttle</li>
                <li className="list__item">Free wifi in all rooms</li>
                <li className="list__item">Air conditioning and heating</li>
                <li className="list__item">Pets allowed</li>
                <li className="list__item">We speak all languages</li>
                <li className="list__item">Perfect for families</li>
              </ul>
              <div className="recommend">
                <p className="recommend__count">
                  Lucy and 3 other friends recommend this hotel.
                            </p>
                <div className="recommend__friends">
                  <img src={User3} alt="Friend 1" className="recommend__photo" />
                  <img src={User4} alt="Friend 2" className="recommend__photo" />
                  <img src={User5} alt="Friend 3" className="recommend__photo" />
                  <img src={User6} alt="Friend 4" className="recommend__photo" />
                </div>
              </div>
            </div>

            <div className="user-reviews">
              <figure className="review">
                <blockquote className="review__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto
                  dicta animi, totam, itaque officia ex.
                            </blockquote>
                <figcaption className="review__user">
                  <img src={User1} alt="User 1" className="review__photo" />
                  <div className="review__user-box">
                    <p className="review__user-name">Nick Smith</p>
                    <p className="review__user-date">Aug 23rd, 2020</p>
                  </div>
                  <div className="review__rating">7.8</div>
                </figcaption>
              </figure>

              <figure className="review">
                <blockquote className="review__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto
                  dicta animi.
                            </blockquote>
                <figcaption className="review__user">
                  <img src={User2} alt="User 2" className="review__photo" />
                  <div className="review__user-box">
                    <p className="review__user-name">Mary Thomas</p>
                    <p className="review__user-date">Aug 13th, 2020</p>
                  </div>
                  <div className="review__rating">9.3</div>
                </figcaption>
              </figure>

              <button className="btn-inline">Show all <span>&rarr;</span></button>
            </div>

            <div className="cta">
              <h2 className="cta__book-now">
                Good news! We have 4 free rooms for your selected dates!
              </h2>
              <button className="btn">
                <span className="btn__visible">Book now</span>
                <span className="btn__invisible">Only 4 rooms left</span>
              </button>
            </div>

          </div>


        </main>
      </div>
    </div>
  );
}

export default App;
