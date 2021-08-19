import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {asyncloadShops, loadShops} from "../redux/store/reduserShops";

function Home() {
    // const [shops, setShops] = useState([]);
    const shops = useSelector(state => state.shopsReducers.shops);
    const dispatch = useDispatch();
    // state = {
    //     points: [
    //         {
    //             address: "вул.С.Бандери, 15",
    //             url: 'bandera',
    //         },
    //         {
    //             address: "вул.Соборна, 25",
    //             url: 'soborna',
    //         },
    //         {
    //             address: "вул.Незалежності, 42",
    //             url: 'independ',
    //         }
    //     ],
    //     visible: false,
    //     disable: true,
    //     url: '',
    //     check: true
    //
    // }


    //
    // const showPoint = () => {
    //     this.setState({
    //         visible: !this.state.visible
    //     })
    // }
    // checkList = (index) => {
    //     let pointsNew = this.state.points;
    //     this.setState({
    //         url: this.state.points[index].url
    //     })
    //     this.setState({
    //         disable: !this.state.disable
    //     })
    //     pointsNew[index].check = !pointsNew[index].check;
    //
    //     this.setState({
    //         points: pointsNew
    //     })
    // }
    // test = (event) => {
    //     let urlNew = '';
    //     let pointsNew = this.state.points.map((item, index) => {
    //         if (+event.target.id === index) {
    //             item.check = true;
    //             urlNew = item.url
    //             return item
    //         } else {
    //             item.check = false;
    //             return item
    //         }
    //     });
    //     this.setState({
    //         points: pointsNew,
    //         url: urlNew
    //     })
    // }
    // handleSendPage= (url) => {
    //     this.props.history.push(`/hot-burgers/${url}`)
    // }
    // style = {
    //     height: '100vh',
    //     marginTop: '1.5rem',
    //     backgroundColor: 'RGBA(255,111,0,0.55)'
    // }
    const onHandleLoad = () => {
        console.log('dispath')
        dispatch(asyncloadShops())
    }
    return (
        <div>
            <button onClick={onHandleLoad}>load</button>
            <p>
                {
                    shops.map((item) => {
                        return <div>{item.address}</div>
                    })
                }
            </p>
        </div>
    )
        // return (
        //     <div className='container center homeHeaderImgUrl'
        //          style={{height: this.style.height, backgroundSize: 'cover'}}>
        //         <div className='container center'>
        //             <h1 className='font-effect-fire-animation'>The HOTTEST Burgers</h1>
        //             <h2 className='font-effect-shadow-multiple'>МИ В ВАШОМУ МІСТІ</h2>
        //             {this.state.visible ?
        //                 <div className='container' onClick={this.test}
        //                      style={{backgroundColor: this.style.backgroundColor}}>
        //                     {
        //                         this.state.points.map((item, index) => {
        //                             return (
        //                                 <label style={{fontSize: '1.4rem', padding: '0.6rem'}} htmlFor={index}
        //                                        className={item.check ? 'select' : null} key={index}>
        //                                     <input type='radio' name='point' id={index}
        //                                            key={index}
        //                                         // onClick={() => this.checkList(index)}
        //                                            value={item.address}
        //                                     />
        //                                     {item.address}
        //                                 </label>
        //                             )
        //                         })
        //                     }
        //                 </div>
        //                 : null
        //             }
        //             {
        //                 this.state.visible === false ?
        //                     <button className='button' onClick={showPoint}>ВИБРАТИ</button> :
        //                     null
        //             }
        //             {this.state.visible === true ?
        //                 <button style={{marginTop: this.style.marginTop}} className='button'
        //                         disabled={this.state.url === '' ? 'disabled' : null}
        //                         onClick={() => this.handleSendPage(this.state.url)}
        //                 >
        //                     ПЕРЕЙТИ
        //                 </button>
        //                 :
        //                 null
        //             }
        //         </div>
        //     </div>
        // )
}

export default Home;