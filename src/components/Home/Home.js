import classes from './Home.module.css'
import lightjoo from './../../img/lightjoo.jpg'


const Home = () => {
    return (
    
    <div className={classes.home}>
        
      <section className={classes.info}>
        <ul>  
            <li className={classes.item}>
                <div className={classes.img}>
                    <img className={classes.lightjoo} src={lightjoo} alt=""></img>
                    대한민국 대한민국 대한민국 대한민국 대한민국 대한민국 대한민국 </div>
                <div className={classes.img}>
                    <img className={classes.lightjoo} src={lightjoo} alt=""></img>
                    대한민국 대한민국 대한민국 대한민국 대한민국 대한민국 대한민국 </div>
            </li>    
            
            <li className={classes.item}>
                <div className={classes.img}>
                    <img className={classes.lightjoo} src={lightjoo} alt=""></img>
                    대한민국 대한민국 대한민국 대한민국 대한민국 대한민국 대한민국 </div>
                <div className={classes.img}>
                    <img className={classes.lightjoo} src={lightjoo} alt=""></img>
                    대한민국 대한민국 대한민국 대한민국 대한민국 대한민국 대한민국 </div>
            </li> 

            <li className={classes.item}>
                <div className={classes.img}>
                    <img className={classes.lightjoo} src={lightjoo} alt=""></img>
                    대한민국 대한민국 대한민국 대한민국 대한민국 대한민국 대한민국 </div>
                <div className={classes.img}>
                    <img className={classes.lightjoo} src={lightjoo} alt=""></img>
                    대한민국 대한민국 대한민국 대한민국 대한민국 대한민국 대한민국 </div>
            </li> 
                
        </ul>
      </section>
    </div> 
     );
}
 
export default Home;