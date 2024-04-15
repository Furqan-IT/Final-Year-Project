import React from 'react'
import "./Techniquesreduce.css";


const Techniquesreduce = () => {
  return (
    <>
      <section id="food-menu">
        <h2 className="food-menu-heading">
          Techineques to reduced food waste.
        </h2>
        <div className="food-menu-container container">
          <div className="food-menu-item">
            <div className="food-img">
              <img src="https://i.postimg.cc/wTLMsvSQ/food-menu1.jpg" alt="" />
            </div>
            <div className="food-description">
              <h2 className="food-titile">Donate Excess Food:</h2>
              <p>
                If you have surplus non-perishable items or unspoiled,
                perishable foods, consider donating them to local food banks or
                shelters.
              </p>
            </div>
          </div>

          <div className="food-menu-item">
            <div className="food-img">
              <img
                src="https://i.postimg.cc/sgzXPzzd/food-menu2.jpg"
                alt="error"
              />
            </div>
            <div className="food-description">
              <h2 className="food-titile">Educate Yourself:</h2>
              <p>
                Learn about the shelf life of different foods and the proper
                storage methods to maximize their freshness.
              </p>
            </div>
          </div>
          <div className="food-menu-item">
            <div className="food-img">
              <img src="https://i.postimg.cc/8zbCtYkF/food-menu3.jpg" alt="" />
            </div>
            <div className="food-description">
              <h2 className="food-titile">Share with Neighbors:</h2>
              <p>
                If you have extra produce from your garden, consider sharing it
                with your neighbors or participating in a local food-sharing
                program.
              </p>
            </div>
          </div>
          <div className="food-menu-item">
            <div className="food-img">
              <img src="https://i.postimg.cc/Yq98p5Z7/food-menu4.jpg" alt="" />
            </div>
            <div className="food-description">
              <h2 className="food-titile">Meal Planning:</h2>
              <p>
                Plan your meals in advance and make a shopping list based on
                what you need. Stick to your list to avoid buying unnecessary
                items.
              </p>
            </div>
          </div>
          <div className="food-menu-item">
            <div className="food-img">
              <img src="https://i.postimg.cc/KYnDqxkP/food-menu5.jpg" alt="" />
            </div>
            <div className="food-description">
              <h2 className="food-titile">Proper Storage:</h2>
              <p>
                Store food items properly to extend their freshness. Use
                airtight containers, resealable bags, and store items in the
                right temperature and humidity conditions.
              </p>
            </div>
          </div>
          <div className="food-menu-item">
            <div className="food-img">
              <img src="/pic/aa.jpg" alt="" />
            </div>
            <div className="food-description">
              <h2 className="food-titile">First-In, First-Out (FIFO):</h2>
              <p>
                When putting away groceries or leftovers, use the FIFO method.
                Place older items in the front of the fridge or pantry, so they
                are used before newer items.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Techniquesreduce