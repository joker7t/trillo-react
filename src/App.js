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
    <div class="container">
      <header class="header">
        <img src={Logo} alt="trillo logo" class="logo" />

        <form action="#" class="search">
          <input type="text" class="search__input" placeholder="Search hotels" />
          <button class="search__button">
            <svg class="search__icon">
              <MagnifyingGlass />
            </svg>
          </button>
        </form>

        <nav class="user-nav">
          <div class="user-nav__icon-box">
            <svg class="user-nav__icon">
              <Bookmark />
            </svg>
            <span class="user-nav__notification">7</span>
          </div>
          <div class="user-nav__icon-box">
            <svg class="user-nav__icon">
              <Chat />
            </svg>
            <span class="user-nav__notification">13</span>
          </div>
          <div class="user-nav__user">
            <img src={User} alt="User" class="user-nav__user-photo" style={{ width: '35px' }} />
            <span class="user-nav__user-name">Toan</span>
          </div>
        </nav>
      </header>

      <div class="content">
        <nav class="sidebar">
          <ul class="side-nav">
            <li class="side-nav__item side-nav__item--active">
              <a href="#" class="side-nav__link">
                <svg class="side-nav__icon">
                  <Home />
                </svg>
                <span>Hotel</span>
              </a>
            </li>
            <li class="side-nav__item">
              <a href="#" class="side-nav__link">
                <svg class="side-nav__icon">
                  <AircraftTakeOff />
                </svg>
                <span>Flight</span>
              </a>
            </li>
            <li class="side-nav__item">
              <a href="#" class="side-nav__link">
                <svg class="side-nav__icon">
                  <Key />
                </svg>
                <span>Car rental</span>
              </a>
            </li>
            <li class="side-nav__item">
              <a href="#" class="side-nav__link">
                <svg class="side-nav__icon">
                  <Map />
                </svg>
                <span>Tours</span>
              </a>
            </li>
          </ul>

          <div class="legal">
            &copy; 2020 by trillo. All rights reserved.
                </div>
        </nav>



        <main class="hotel-view">
          <div class="gallery">
            <figure class="gallery__item">
              <img src={Hotel1} alt="hotel 1" class="gallery__photo" />
            </figure>
            <figure class="gallery__item">
              <img src={Hotel2} alt="hotel 2" class="gallery__photo" />
            </figure>
            <figure class="gallery__item">
              <img src={Hotel3} alt="hotel 3" class="gallery__photo" />
            </figure>
          </div>

          <div class="overview">
            <h1 class="overview__heading">
              Hotel Las Palmas
                    </h1>

            <div class="overview__stars">
              <svg class="overview__icon-star">
                <Star />
              </svg>
              <svg class="overview__icon-star">
                <Star />
              </svg>
              <svg class="overview__icon-star">
                <Star />
              </svg>
              <svg class="overview__icon-star">
                <Star />
              </svg>
              <svg class="overview__icon-star">
                <Star />
              </svg>
            </div>

            <div class="overview__location">
              <svg class="overview__icon-location">
                <LocationPin />
              </svg>
              <button class="btn-inline">Albufeira, Portugal</button>
            </div>

            <div class="overview__rating">
              <div class="overview__rating-average">8.6</div>
              <div class="overview__rating-count">429 votes</div>
            </div>
          </div>

          <div class="detail">
            <div class="description">
              <p class="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis
                ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae
                architecto voluptate.
                        </p>
              <p class="paragraph">
                Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus,
                inventore iure aliquid aliquam.
                        </p>
              <ul class="list">
                <li class="list__item">Close to the beach</li>
                <li class="list__item">Breakfast included</li>
                <li class="list__item">Free airport shuttle</li>
                <li class="list__item">Free wifi in all rooms</li>
                <li class="list__item">Air conditioning and heating</li>
                <li class="list__item">Pets allowed</li>
                <li class="list__item">We speak all languages</li>
                <li class="list__item">Perfect for families</li>
              </ul>
              <div class="recommend">
                <p class="recommend__count">
                  Lucy and 3 other friends recommend this hotel.
                            </p>
                <div class="recommend__friends">
                  <img src={User3} alt="Friend 1" class="recommend__photo" />
                  <img src={User4} alt="Friend 2" class="recommend__photo" />
                  <img src={User5} alt="Friend 3" class="recommend__photo" />
                  <img src={User6} alt="Friend 4" class="recommend__photo" />
                </div>
              </div>
            </div>

            <div class="user-reviews">
              <figure class="review">
                <blockquote class="review__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto
                  dicta animi, totam, itaque officia ex.
                            </blockquote>
                <figcaption class="review__user">
                  <img src={User1} alt="User 1" class="review__photo" />
                  <div class="review__user-box">
                    <p class="review__user-name">Nick Smith</p>
                    <p class="review__user-date">Feb 23rd, 2017</p>
                  </div>
                  <div class="review__rating">7.8</div>
                </figcaption>
              </figure>

              <figure class="review">
                <blockquote class="review__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto
                  dicta animi.
                            </blockquote>
                <figcaption class="review__user">
                  <img src={User2} alt="User 2" class="review__photo" />
                  <div class="review__user-box">
                    <p class="review__user-name">Mary Thomas</p>
                    <p class="review__user-date">Sept 13th, 2017</p>
                  </div>
                  <div class="review__rating">9.3</div>
                </figcaption>
              </figure>

              <button class="btn-inline">Show all <span>&rarr;</span></button>
            </div>

            <div class="cta">
              <h2 class="cta__book-now">
                Good news! We have 4 free rooms for your selected dates!
              </h2>
              <button class="btn">
                <span class="btn__visible">Book now</span>
                <span class="btn__invisible">Only 4 rooms left</span>
              </button>
            </div>

          </div>


        </main>
      </div>
    </div>
  );
}

export default App;
