import React, { PureComponent } from 'react';
import $ from 'jquery';
// Import Boisson image PNG and WEBP Librairies
import { boissonPng } from './Images/pngImport';
import { boissonWebp } from './Images/webpImport';

class Boissons extends PureComponent {
  constructor(props) {
    super(props);
    // Class variable that will not change
    this.boissons = [
      { id: 'coca', name: 'Coca Cola', price: 550 },
      { id: 'cocaCherry', name: 'Coca Cherry', price: 600 },
      { id: 'cocaZero', name: 'Coca Zero', price: 550 },
      { id: 'pepsi', name: 'Pepsi', price: 700 },
      { id: 'fanta', name: 'Fanta', price: 550 },
      { id: 'sprite', name: 'Sprite', price: 550 },
      { id: 'jusFraise', name: 'Jus Fraise', price: 550 },
      { id: 'jusTropical', name: 'Jus Tropical', price: 550 },
      { id: 'tonic', name: 'Tonic', price: 1600 },
      { id: 'stellaArtois', name: 'Stella Artois', price: 1750 },
      { id: 'heineken', name: 'Heineken', price: 1300 },
      { id: 'rose', name: 'Rose', price: null },
    ];
    // State
    this.state = {
      defaultDrink: 'coca',
    };
  }

  componentDidMount() {
    // Cycle to all Boisson of Carousel
    $('#drinkCarousel').carousel({
      interval: 3000,
      pause: 'none',
    });
    //  Change the default Boisson to the actual cycled one for the className
    $('#drinkCarousel').on('slide.bs.carousel', (ev) => {
      if (this.props.selectedDrink === null) {
        this.setState({ defaultDrink: ev.relatedTarget.id });
      }
    });
  }

  render() {
    // Pause the Carousel Cylcle if there is a selected boisson
    if (this.props.selectedDrink !== null) {
      $('#drinkCarousel').carousel('pause');
    }
    // Array of all Boissons Buttons
    let carouselBtnControl = [];

    return (
      <div id='boissons'>
        <h1>Boissons</h1>
        <p className='instruction-text'>
          Selectionner un brevage à l'aide des Box
        </p>
        <div
          id='drinkCarousel'
          className='carousel slide paused mt-4'
          data-ride='carousel'
          // data-interval='2500'
        >
          <div className='carousel-inner'>
            {this.boissons.map((boisson, i) => {
              // create a array of control button for carousel
              carouselBtnControl.push(
                <button
                  key={boisson.id}
                  data-target='#drinkCarousel'
                  data-slide-to={i}
                  onClick={() =>
                    // Call the Update Price function of Parent Compenent
                    this.props.selectedDrinkHandler(
                      // Find the cliked Boisson Object and send it as parametter
                      this.boissons.find(
                        (foundBoisson) => boisson.id === foundBoisson.id
                      )
                    )
                  }
                  className={
                    this.props.selectedDrink === null // if there is no seletecd Boisson
                      ? boisson.id === this.state.defaultDrink
                        ? boisson.id //set a the boisson id as className to the actual cycled Boisson
                        : '' // don't set a classename to other boisson that are actually not cycled
                      : boisson.id === this.props.selectedDrink
                      ? this.props.selectedDrink //Set a className to the selected Boisson
                      : '' // don't set a classename to other boisson
                  }
                >
                  {boisson.name}
                </button>
              );
              // Render all carousel item (boisson)
              return (
                <div
                  className={
                    this.props.selectedDrink === null
                      ? i === 0 // set the active boisson to 'Coca'
                        ? 'carousel-item active'
                        : 'carousel-item'
                      : 'carousel-item' //don't set active class if there is a selected boisson
                  }
                  key={boisson.id}
                  id={boisson.id}
                >
                  <div>
                    {/* Serve WEBP or PNG Image */}
                    <picture>
                      <source
                        srcSet={boissonWebp[boisson.id]}
                        type='image/webp'
                      />
                      <img src={boissonPng[boisson.id]} alt={boisson.id} />
                    </picture>

                    <span>
                      {boisson.price
                        ? boisson.price + ' XOF'
                        : 'Non Disponisble'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <span className='carousel-control-left-icon '></span>
          <span className='carousel-control-right-icon '></span>
        </div>
        <div className='boisson-btn-group'>
          {/* Render Carousel Buttons Control */}
          {carouselBtnControl}
        </div>
        {/* checkbox to not include a Drink  */}
        <div className='custom-control custom-checkbox mt-3 mx-auto'>
          <input
            className='custom-control-input'
            type='checkbox'
            id='noDrinkCheck'
            checked={this.props.selectedDrink ? false : 'checked'}
            disabled={this.props.selectedDrink ? false : 'disabled'}
            onChange={this.props.remountComponent}
          />
          <label className='custom-control-label mr-2' htmlFor='noDrinkCheck'>
            Cochez pour ne pas en inclure
          </label>
        </div>
      </div>
    );
  }
}

export default Boissons;
