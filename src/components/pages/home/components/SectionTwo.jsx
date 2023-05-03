import classes from "../style/sectiontwo.module.scss";
function SectionTwo() {
  return (
    <div className={classes["container"]}>
      <h2>Learn more about process</h2>
      <p className={classes["sub-title"]}>
        Quis autem vel eum iure reprehenderit qui in ea voluptate
      </p>

      <div className={classes["box-container"]}>
        <div className={classes["boxes"]}>
          <div className={classes["inner-box"]}>
            <img src="/img/box1.png" alt="" />

            <div>Connect</div>
            <p className={classes["txt"]}>
              Nemo enim ipsam voluptatem qui voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
            </p>
          </div>
        </div>
        <div className={classes["boxes"]}>
       
            <div className={classes["inner-box"]}>

           
            <img src="/img/box2.png" alt="" />
          

          <div>Connect</div>
          <p className={classes["txt"]}>
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultan
          </p>
           </div>
        </div>

        <div className={classes["boxes"]}>
        <div className={classes["inner-box"]}>

        
            <img src="/img/box3.png" alt="" />
      

          <div>Connect</div>
          <p className={classes["txt"]}>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
