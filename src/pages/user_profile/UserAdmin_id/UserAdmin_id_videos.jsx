import React, { useState } from 'react'
import video_icon from './img/video.svg'
import lock_icon from './img/lock.svg'
import up_icon from './img/up.svg' 
import down_icon from './img/down.svg' 
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      "& > * + *": {
        marginTop: theme.spacing(1),
      },
    },
  }));

const UserAdmin_id_video = () =>{
    const [ModuleTheme, setModuleTheme] = useState(true)
    return(
        <React.Fragment>
            <div className="UserAdmin_id_videos">

                <div className="UserAdmin_id_right_content">
                        <h3>Kurs tarkibi</h3>
                        <p>30 ta video</p>
                </div>

                <div className="UserAdmin_id_right_progress">
                    <p>Progress <span>8/30 (28%)</span></p>
                    <div>
                        <div style={{width:`30%`}}>
                        
                        </div>
                    </div>
                </div>

                <div className="UserAdmin_id_right_moduleTheme">
                    <p>
                        <span onClick={()=> setModuleTheme(!ModuleTheme)}>
                            Modul 1 - modulning mavzusi 
                        {
                        ModuleTheme === true ? 
                            <img src={up_icon} alt="" />
                            :
                            <img src={down_icon} alt="" />
                        }
                        </span>
                            {
                            ModuleTheme === true ?
                            <div>
                                <p>
                                    <img src={video_icon} alt="" />
                                    1. Strategik marketing (treyler)
                                </p>
                                <p>
                                    <img src={video_icon} alt="" />
                                    2. SWOT analiz qilish
                                </p>
                                <p>
                                    <img src={video_icon} alt="" />
                                    3. Ish muhiti
                                </p>
                                <p>
                                    <img src={video_icon} alt="" />
                                    4. Biznesda politika qanday...
                                </p>
                                <p>
                                    <img src={video_icon} alt="" />
                                    5. Bir burun qoydasi
                                </p>
                                <p>
                                    <img src={video_icon} alt="" />
                                    7. Fundamental marketing
                                </p>
                                <p>
                                    <img src={video_icon} alt="" />
                                    8. Mijozlarimizning umrlik qiymati.
                                </p>
                            </div>
                            :
                            null 
                        }
                    </p>
                
                    <p>
                        <span>
                            Modul 2 - modulning mavzusi
                            <img src={lock_icon} alt="" />
                        </span>
                    </p>

                    <p>
                        <span>
                            Modul 3 - modulning mavzusi
                            <img src={lock_icon} alt="" />
                        </span>
                    </p>
                </div>

            </div>
        </React.Fragment>
    );
}
 
export default UserAdmin_id_video;