import React from 'react'
import noticee from '../assets/Important notice.png'
import wallet from '../assets/wallet.png'
import yellowcoin from '../assets/yellowcoin.png'
import "./Coinflipping.css"

function Coinflipping() {
    return (
        <>
            <div className='warp-flipping'>
                <div className='container'>
                    {/* first div */}
                    <div className='flippingminiame'>
                        <h1>Warp Flipping Minigame</h1>
                        <p>Use your Warp or BUSD and flip the coin! There is a 50/50 chance to win or lose.</p>
                        <img src={yellowcoin} alt='yellowcoin' />
                    </div>
                    {/* second div */}
                    <div className='warpbusd'>
                        {/*Left columns */}
                        <div className='approvewrap'>
                            <h2 className='dsktopflipphead'>Flip your WARP</h2>
                            <h2 className='mobileflipphead'>Warp Flipping Minigame</h2>
                            <p className='desktopeflippara'>Heads or Tails.  Either you win or you lose. </p>
                            <p className='mobileflippara'>Use your Warp or BUSD and flip the coin! There is a 50/50 chance to win or lose.</p>
                            <div className='amountwrap'>
                                <div><p>Enter Amount</p></div>
                                <div><p>WARP Price POT: 0.000000 WARP</p></div>
                            </div>
                            {/* form div */}
                            <div>
                                <form className='poolform'>
                                    <input type="text" id="fname" name="fname" />
                                    <button>Approve</button>
                                </form>
                            </div>
                            <div className='amountwrap' id="amount">
                                <div><p>Enter Amount</p></div>
                                <div><p></p></div>
                            </div>
                            {/* form div */}
                            <div>
                                <form className='poolform'>
                                    <input type="text" />
                                    <div className='headtailbtn'>
                                        <button>HEAD</button>
                                        <button>TAIL</button>
                                    </div>
                                </form>
                            </div>
                            <div className='maximumerap'>
                                <p>Minimum: WARP</p><p>Maximum: WARP</p><p>Your maximum win is x1.94</p>
                            </div>
                        </div>
                        {/*Right columns */}
                        <div className='approvebusd'>
                            <h2>Flip your BUSD</h2>
                            <p>Heads or Tails.  Either you win or you lose. </p>
                            <div className='amountwrap'>
                                <div><p>Enter Amount</p></div>
                                <div><p>WARP Price POT: 0.000000 BUSD</p></div>
                            </div>
                            {/* form div */}
                            <div>
                                <form className='poolform'>
                                    <input type="text" id="fname" name="fname" />
                                    <button>Approve</button>
                                </form>
                            </div>
                            <div className='amountwrap' id="amount">
                                <div><p>Enter Amount</p></div>
                                <div><p></p></div>
                            </div>
                            {/* form div */}
                            <div>
                                <form className='poolform'>
                                    <input type="text" />
                                    <div className='headtailbtn'>
                                        <button>HEAD</button>
                                        <button>TAIL</button>
                                    </div>
                                </form>
                            </div>
                            <div className='maximumerap'>
                                <p>Minimum: BUSD</p><p>Maximum: BUSD</p><p>Your maximum win is x1.94</p>
                            </div>
                        </div>
                    </div>
                    {/* last play's */}
                    <div className='lastplays'>
                        <div className='plays'>
                            <h2>Last Plays</h2>
                        </div>
                        <div className='tabletaahts'>
                            <table>
                                <tr className='taahs'>
                                    <th>
                                        <td>
                                            Time
                                        </td>
                                    </th>
                                    <th>
                                        <td>
                                            Address
                                        </td>
                                    </th>
                                    <th>
                                        <td>
                                            Amount
                                        </td>
                                    </th>
                                    <th>
                                        <td>
                                            Head/Tails
                                        </td>
                                    </th>
                                    <th>
                                        <td>
                                            Status
                                        </td>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        <td>
                                            0013
                                        </td>
                                    </th>
                                    <th>
                                        <td>
                                        1JSxFP76yLTv4fcjytx9RZBt5WoLAN4tBX
                                        </td>
                                    </th>
                                    <th>
                                        <td>
                                        24.5
                                        </td>
                                    </th>
                                    <th>
                                        <td>
                                        Heads
                                        </td>
                                    </th>
                                    <th>
                                        <td>
                                            win
                                        </td>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        <td>
                                            0014
                                        </td>
                                    </th>
                                    <th>
                                        <td>
                                        mtk1kLYRVnutjoq1CzmZVFRbMv34oVxDRA
                                        </td>
                                    </th>
                                    <th>
                                        <td>
                                        25.5
                                        </td>
                                    </th>
                                    <th>
                                        <td>
                                        Heads
                                        </td>
                                    </th>
                                    <th>
                                        <td>
                                            win
                                        </td>
                                    </th>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Coinflipping