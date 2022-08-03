import "../css/Services.css";

export const Services = () => {
  return (
    <div className="services">
      <div className="shortDashline-contact"></div>
      <div className="servicesTitle">Services and Prices</div>
      <div class="row">
        <div class="col">
          <img
            src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=11e949fc5d06576bc8b80ec192896753"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="col">
          <div className="wedding">Wedding Photography</div>
          <div className="weddingDescription">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur porro quos et eos quisquam officiis eligendi
            praesentium incidunt id magni. Nostrum corrupti fuga amet officia
            numquam suscipit eligendi pariatur voluptate.
          </div>
          <div className="weddingPrice">Price : $250-$1200</div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div className="wedding">Wedding Photography</div>
          <div className="weddingDescription">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur porro quos et eos quisquam officiis eligendi
            praesentium incidunt id magni. Nostrum corrupti fuga amet officia
            numquam suscipit eligendi pariatur voluptate.
          </div>
          <div className="weddingPrice">Price : $250-$1200</div>
        </div>
        <div class="col">
          <img
            src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=11e949fc5d06576bc8b80ec192896753"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};
