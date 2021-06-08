import React from "react";
import "./Landing.scss";
import {Tween, Timeline} from "react-gsap";

const Landing = () =>{

    return(
        <div className="landing-container" id="landing">

            <div className="landing-text">    
                <Tween from={{opacity: 0, y: '-100px'}} duration={1.5} ease="power2.out">
                    <div className='l-container'>
                       <p className="l-text1">Hi,</p>
                        <p className="l-text1">I'm Dhruv.</p>
                    </div>
                </Tween>

                <Tween from={{opacity: 0, y: '-60px'}} duration={1.5} ease="power2.out">
                    <div className='l-container2'>
                        <p className="l-text2">Passionate Designer</p>
                         <p className="l-text2">& Developer</p>
                    </div>
                </Tween>
            </div>

            
            <Tween from={{x: 260, opacity:0}} delay={1} duration={1} ease="power2.out">
                <div className="landing-svg">
                    <svg width="601" height="519" viewBox="0 0 561 479" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M97.025 345.11L245.255 443.142C247.17 444.409 249.348 445.077 251.566 445.077C253.784 445.077 255.963 444.409 257.878 443.142L434.775 327.442C436.683 326.201 438.269 324.41 439.372 322.253C440.474 320.095 441.055 317.646 441.055 315.153C441.055 312.659 440.474 310.21 439.372 308.053C438.269 305.895 436.683 304.105 434.775 302.863L284.708 205.944C282.812 204.712 280.665 204.063 278.48 204.063C276.295 204.063 274.148 204.712 272.253 205.944L97.0811 320.531C95.1698 321.767 93.5802 323.552 92.4727 325.707C91.3652 327.862 90.779 330.309 90.7733 332.802C90.7676 335.295 91.3426 337.746 92.4403 339.907C93.5379 342.068 95.1193 343.863 97.025 345.11Z" fill="#868686"/>

                        <Tween from={{ scaleY: 0, transformOrigin: 'center'}} duration={0.5} delay={1.2}>
                            <path d="M229.729 38.1781C210.305 51.2225 162.241 83.4442 147.866 92.9136C146.64 93.7208 145.625 94.8808 144.923 96.276C144.221 97.6712 143.857 99.2519 143.868 100.858V324.423C143.574 328.983 148.076 333.21 151.835 330.779L232.661 278.649C235.915 276.536 237.99 273.565 237.99 269.323V43.5007C237.989 42.4073 237.733 41.3337 237.247 40.3888C236.761 39.444 236.064 38.6615 235.225 38.121C234.386 37.5804 233.435 37.301 232.47 37.311C231.505 37.321 230.56 37.6202 229.729 38.1781Z" fill="#A0A6BC"/>
                        </Tween>
                        
                        
                        <path d="M237.443 40.895L211.778 57.6414V63.8696C211.778 64.3945 211.656 64.9102 211.425 65.3648C211.193 65.8195 210.86 66.197 210.459 66.4595L190.824 79.3449C190.56 79.5176 190.261 79.6086 189.956 79.6089C189.651 79.6092 189.352 79.5187 189.087 79.3465C188.823 79.1743 188.604 78.9265 188.451 78.6278C188.298 78.3292 188.216 77.9902 188.216 77.6449V73.0849L151.175 97.6166C150.825 97.8516 150.534 98.1863 150.332 98.5876C150.131 98.9888 150.025 99.4428 150.025 99.9045V323.359C150.022 323.679 150.094 323.994 150.233 324.272C150.372 324.55 150.573 324.781 150.817 324.943C151.061 325.104 151.338 325.19 151.62 325.191C151.902 325.191 152.179 325.108 152.424 324.948L237.976 268.766C238.112 270.491 237.835 272.225 237.174 273.785C236.512 275.346 235.491 276.675 234.218 277.632C229.786 280.81 151.835 330.795 151.835 330.795C151.835 330.795 145.678 333.972 143.868 325.615V100.842C143.864 99.3733 144.169 97.9247 144.76 96.6173C145.35 95.3098 146.208 94.1815 147.263 93.3267C150.839 90.3874 229.786 38.1146 229.786 38.1146C230.447 37.7157 231.173 37.4712 231.92 37.3954C232.666 37.3196 233.419 37.4141 234.133 37.6733C234.846 37.9325 235.507 38.3512 236.076 38.9045C236.644 39.4578 237.109 40.1347 237.443 40.895Z" fill="black"/>
                        <path d="M323.669 313.556C323.824 314.45 323.803 315.371 323.609 316.255C323.415 317.139 323.053 317.964 322.547 318.672C320.836 320.753 314.328 327.283 313.711 328.697C313.094 330.112 312.225 333.972 313.711 335.307C315.198 336.642 318.087 336.801 321.621 335.307C326.518 332.765 331.104 329.518 335.268 325.647C336.838 323.709 335.268 303.8 335.268 303.8C335.268 303.8 326.137 301.274 323.066 303.8L323.669 313.556Z" fill="#F96156"/>
                        <path d="M313.01 331.414C312.837 332.072 312.811 332.768 312.936 333.44C313.061 334.111 313.332 334.737 313.725 335.259C315.212 336.594 318.101 336.753 321.635 335.259C326.532 332.717 331.118 329.47 335.282 325.599C335.824 324.184 336.055 322.641 335.955 321.103C330.036 327.506 317.526 338.183 313.01 331.414Z" fill="#391A3A"/>
                        <path d="M327.414 321.135C326.871 320.211 326.114 319.474 325.226 319.006C324.185 318.604 323.077 318.474 321.986 318.624C321.088 318.624 321.088 320.213 321.986 320.213C322.759 320.022 323.563 320.082 324.308 320.385C325.052 320.689 325.705 321.224 326.193 321.929C326.783 322.739 327.961 321.945 327.414 321.135Z" fill="#391A3A"/>
                        <path d="M325.38 323.883C324.659 322.918 323.724 322.189 322.672 321.77C321.619 321.351 320.486 321.258 319.391 321.5C318.508 321.707 318.886 323.232 319.77 323.089C320.626 322.924 321.505 323.021 322.316 323.37C323.127 323.719 323.841 324.308 324.384 325.075C325.043 325.758 326.039 324.63 325.38 323.883Z" fill="#391A3A"/>
                        <path d="M345.324 325.742C345.478 326.636 345.458 327.557 345.264 328.441C345.07 329.325 344.707 330.15 344.202 330.858C342.49 332.94 335.983 339.47 335.366 340.884C334.749 342.298 333.879 346.159 335.366 347.493C336.852 348.828 339.742 348.987 343.276 347.493C348.172 344.951 352.759 341.705 356.922 337.833C358.493 335.895 356.922 315.987 356.922 315.987C356.922 315.987 347.792 313.461 344.72 315.987L345.324 325.742Z" fill="#F1EFEF"/>
                        <path d="M334.665 343.585C334.491 344.243 334.466 344.939 334.591 345.61C334.716 346.282 334.987 346.907 335.38 347.43C336.867 348.765 339.756 348.923 343.29 347.43C348.186 344.888 352.773 341.641 356.936 337.77C357.493 336.348 357.733 334.793 357.638 333.242C351.691 339.676 339.181 350.369 334.665 343.585Z" fill="#391A3A"/>
                        <path d="M349.068 333.321C348.526 332.397 347.768 331.66 346.88 331.192C345.839 330.791 344.732 330.661 343.641 330.811C342.743 330.811 342.743 332.399 343.641 332.399C344.413 332.209 345.218 332.268 345.962 332.572C346.706 332.875 347.36 333.41 347.848 334.115C348.395 334.926 349.615 334.131 349.068 333.321Z" fill="#391A3A"/>
                        <path d="M347.077 336.07C346.356 335.105 345.421 334.375 344.368 333.956C343.316 333.537 342.183 333.444 341.088 333.686C340.204 333.893 340.583 335.418 341.467 335.275C342.322 335.11 343.201 335.207 344.013 335.556C344.824 335.906 345.538 336.494 346.081 337.261C346.698 338.008 347.694 336.816 347.077 336.07Z" fill="#391A3A"/>
                        <path d="M325.506 190.151C320.626 202.799 317.936 216.392 317.582 230.189C317.274 252.084 319.56 310.918 319.56 310.918C319.56 310.918 324.917 316.749 336.684 314.7V233.065C336.684 233.065 340.807 234.734 340.807 238.245C340.807 241.756 344.566 325.218 344.566 325.218C344.566 325.218 346.67 329.651 362.069 322.882C362.069 322.882 364.173 213.554 352.869 192.089" fill="#474646"/>
                        <path d="M268.957 225.9V351.736L300.92 372.454L337.021 348.304V222.452" fill="#68E1FD"/>
                        <path d="M268.957 225.9L306.054 201.972L337.021 222.452L300.92 246.618L268.957 225.9Z" fill="#68E1FD"/>
                        <path d="M300.92 246.618V372.454L337.021 348.304V222.452L300.92 246.618Z" fill="#68E1FD"/>
                        <path opacity="0.1" d="M268.957 225.9V351.736L300.92 372.454L337.021 348.304V222.452" fill="#2E90A0"/>
                        <path d="M268.957 225.9L306.054 201.972L337.021 222.452L300.92 246.618L268.957 225.9Z" fill="#68E1FD"/>
                        <path opacity="0.47" d="M300.92 246.618V372.454L337.021 348.304V222.452L300.92 246.618Z" fill="#2E90A0"/>
                        <path d="M300.303 224.771L282.239 234.511V360.347L191.988 305.04" stroke="black" strokeWidth="1.015" strokeMiterlimit="10"/>
                        <path d="M317.484 239.961L344.412 222.055L301.622 194.79L276.587 212.712L317.484 239.961Z" fill="#787878"/>
                        <path d="M323.893 195.934C331.256 198.826 338.774 198.985 346.474 198.476C349.531 194.834 352.097 190.701 354.089 186.21C360.667 170.799 363.037 144.9 363.037 144.9C363.037 144.9 353.22 136.305 346.712 134.239C340.204 132.174 325.829 135.828 323.473 140.293C321.116 144.757 320.247 164.84 323.473 193.392C323.571 193.9 323.823 195.441 323.893 195.934Z" fill="#7A96A6"/>
                        <path d="M336.305 136.94C334.005 137.496 333.571 130.283 334.552 129.616C335.534 128.949 346.305 128.869 347.96 129.711C351.593 131.538 347.96 137.655 347.96 137.655" fill="#7A96A6"/>
                        <path d="M350.148 106.768C348.072 106.355 348.143 102.431 344.286 100.651C340.429 98.8718 335.871 101.43 334.188 102.812C332.505 104.194 331.271 101.382 329.419 103.543C327.568 105.704 328.746 109.009 327.666 110.184L327.512 110.311C327.045 111.201 326.785 112.21 326.758 113.244C326.731 114.278 326.938 115.303 327.358 116.222C328.204 117.506 329.199 118.655 330.317 119.638L347.624 129.87C349.713 128.202 353.711 112.393 353.486 110.502C353.406 109.534 353.028 108.629 352.417 107.946C351.807 107.264 351.003 106.846 350.148 106.768Z" fill="#200904"/>
                        <path d="M331.158 112.758C330.373 113.712 332.968 132.619 338.031 133.286C343.094 133.953 349.082 126.359 349.615 124.103C350.148 121.846 349.84 109.803 347.778 108.595C345.716 107.388 335.913 106.959 331.158 112.758Z" fill="#F67770"/>
                        <path d="M333.529 107.309C333.529 107.309 332.533 111.71 338.592 112.536C344.65 113.362 345.071 114.903 345.786 117.302C347.189 121.831 351.396 127.09 352.799 113.505C352.869 112.854 348.507 103.543 343.795 102.812C339.082 102.081 333.529 107.309 333.529 107.309Z" fill="#200904"/>
                        <path d="M346.333 119.717C346.333 119.717 348.241 115.999 349.713 117.763C351.186 119.527 350.12 123.674 348.129 124.976" fill="#F67770"/>
                        <path d="M300.387 198.19C300.387 198.19 295.451 202.607 294.146 203.497C292.842 204.387 299.756 206.929 299.869 207.803C299.981 208.677 306.629 201.876 306.629 201.876L300.387 198.19Z" fill="#F67770"/>
                        <path d="M317.484 239.961L306.951 209.312L266.054 181.952L276.587 212.712L317.484 239.961Z" fill="#CACACA"/>
                        <path d="M323.473 140.293C323.473 140.293 320.808 144.614 319.574 156.006C318.339 167.398 314.791 177.313 312.743 180.904C310.696 184.494 297.106 198.889 297.667 200.319C298.228 201.749 301.874 204.291 304.244 205.245C310.871 200.544 316.798 194.683 321.804 187.879C328.816 177.758 328.578 159.82 328.578 159.82" fill="#7A96A6"/>
                        <path d="M328.059 228.203C328.083 226.998 328.302 225.808 328.704 224.692C329.073 224.113 329.552 223.635 330.106 223.294C330.781 222.812 331.427 222.281 332.042 221.705L336.81 215.985L329.616 214.762C328.031 215.954 326.392 217.052 324.707 218.051C324.384 218.051 319.798 221.228 320.022 222.023C320.247 222.817 323.332 220.148 323.332 220.148C321.616 221.016 319.964 222.041 318.396 223.214C317.835 223.961 317.105 227.758 317.61 228.283C318.115 228.807 318.9 228.283 319.419 227.997C319.938 227.711 319.069 229.586 319.868 229.888C320.468 230.125 321.098 230.248 321.734 230.253C322.044 230.437 322.397 230.507 322.744 230.453C323.091 230.399 323.414 230.223 323.669 229.951C324.606 228.661 325.303 227.17 325.717 225.566C325.717 225.566 325.534 230.126 326.684 229.824C327.091 229.649 327.582 229.014 328.059 228.203Z" fill="#F67770"/>
                        <path d="M323.01 221.483C322.136 221.919 321.335 222.521 320.64 223.262C319.755 224.529 319.21 226.056 319.069 227.663C318.985 228.108 319.616 228.203 319.686 227.758C319.793 226.162 320.377 224.655 321.341 223.484C322.043 222.851 322.81 222.317 323.627 221.896C323.405 221.791 323.197 221.652 323.01 221.483Z" fill="#5B434D"/>
                        <path d="M324.707 222.293C324.003 222.866 323.354 223.521 322.771 224.247C321.818 225.629 321.719 228.14 321.369 229.792C321.271 230.237 321.902 230.332 321.986 229.888C322.421 227.838 322.561 225.518 323.935 224.009C324.44 223.453 324.973 222.913 325.52 222.42C325.247 222.395 324.976 222.352 324.707 222.293Z" fill="#5B434D"/>
                        <path d="M363.051 144.9C363.051 144.9 365.856 145.584 365.492 157.135C365.127 168.685 362.602 191.596 357.974 197.157C353.346 202.718 332.112 222.579 332.112 222.579C332.112 222.579 325.534 219.401 326.053 216.589C326.572 213.777 349.054 188.657 349.054 188.657C349.054 188.657 352.448 137.56 363.051 144.9Z" fill="#7A96A6"/>
                        <path d="M324.903 148.936L323.332 195.616C323.332 196.633 324.735 196.633 324.735 195.616L326.306 148.936C326.348 147.983 324.945 147.999 324.903 148.936Z" fill="#696969"/>
                        <path d="M349.152 160.821L346.993 175.819C346.263 180.904 346.095 186.83 343.879 191.438C341.663 196.045 338.269 199.604 335.38 203.402L325.829 216.112C325.24 216.891 326.236 218.019 326.825 217.24L336.824 203.958C339.629 200.24 342.995 196.585 345.085 192.28C347.175 187.974 347.441 182.588 348.129 177.789L350.499 161.281C350.625 160.233 349.293 159.804 349.152 160.821Z" fill="#696969"/>

                        <Timeline delay={1.6}>
                            <Tween from={{scale: 0.01}} duration={0.1} ease="power2">
                                <path d="M160.39 129.822V136.146L225.284 93.3903V88.1948L160.39 129.822Z" fill="#87FFBE"/>
                            </Tween>
                            <Tween from={{scale: 0.01}} duration={0.1} ease="power2">
                                <path d="M194.471 126.12L160.39 147.983V154.306L194.471 131.84V126.12Z" fill="#FF4545"/>
                            </Tween>
                            <Tween from={{scale: 0.01}} duration={0.1} ease="power2">
                                <path d="M199.253 123.054V128.694L206.56 123.88V118.367L199.253 123.054Z" fill="white"/>
                            </Tween>
                            <Tween from={{scale: 0.01}} duration={0.1} ease="power2">
                                <path d="M211.329 115.3V120.734L225.284 111.551V106.339L211.329 115.3Z" fill="#FF4545"/>
                            </Tween>
                            <Tween from={{scale: 0.01}} duration={0.1} ease="power2">
                                <path d="M190.53 144.313L160.39 163.649V169.972L190.53 150.112V144.313Z" fill="#6184FF"/>
                            </Tween>
                            <Tween from={{scale: 0.01}} duration={0.1} ease="power2">
                                <path d="M161.231 181.205V187.529L226.125 144.773V139.562L161.231 181.205Z" fill="#87FFBE"/>
                            </Tween>
                            <Tween from={{scale: 0.01}} duration={0.1} ease="power2">
                                <path d="M177.458 188.959L161.231 199.366V205.689L177.458 194.997V188.959Z" fill="#FF4545"/>
                            </Tween>
                            <Tween from={{scale: 0.01}} duration={0.1} ease="power2">
                                <path d="M182.241 185.893V191.851L197.921 181.507V175.819L182.241 185.893Z" fill="white"/>
                            </Tween>
                            <Tween from={{scale: 0.01}} duration={0.1} ease="power2">
                                <path d="M202.703 172.753V178.361L226.125 162.918V157.722L202.703 172.753Z" fill="#6184FF"/>
                            </Tween>
                            <Tween from={{scale: 0.01}} duration={0.1} ease="power2">
                                <path d="M215.424 180.252L161.231 215.032V221.355L215.424 185.638V180.252Z" fill="#6184FF"/>
                            </Tween>
                            <Tween from={{scale: 0.01}} duration={0.1} ease="power2">
                                <path d="M220.207 177.186V182.492L226.125 178.584V173.388L220.207 177.186Z" fill="#87FFBE"/>
                            </Tween>
                            <Tween from={{scale: 0.01}} duration={0.1} ease="power2">
                                <path d="M161.231 234.05V240.358L226.125 197.602V192.407L161.231 234.05Z" fill="white"/>
                            </Tween>
                            <Tween from={{scale: 0.01}} duration={0.1} ease="power2">
                                <path d="M180.418 239.897L161.231 252.195V258.518L180.418 245.887V239.897Z" fill="#FF4545"/>
                            </Tween>
                            <Tween from={{scale: 0.01}} duration={0.1} ease="power2">
                                <path d="M185.2 236.831V242.741L226.125 215.763V210.567L185.2 236.831Z" fill="#6184FF"/>
                            </Tween>
                            <Tween from={{scale: 0.01}} duration={0.1} ease="power2">
                                <path d="M201.371 242.122L161.231 267.861V274.184L201.371 247.746V242.122Z" fill="white"/>
                            </Tween>
                            <Tween from={{scale: 0.01}} duration={0.1} ease="power2">
                                <path d="M206.153 239.055V244.6L226.125 231.429V226.233L206.153 239.055Z" fill="#87FFBE"/>
                            </Tween>
                        </Timeline>

                        <path d="M245.592 387.723L255.928 401.848L254.568 403.341L244.231 389.232L245.592 387.723Z" fill="black"/>
                        <path d="M219.169 395.047C219.445 395.844 219.936 396.522 220.571 396.986C220.327 397.298 220.149 397.669 220.052 398.071C219.954 398.474 219.94 398.896 220.01 399.306L219.169 395.047Z" fill="#F0F0F0"/>
                        <path d="M242.043 395.032L244.638 397.049L243.25 403.135L249.449 400.767L252.043 402.769L241.637 406.614L239.856 405.232L242.043 395.032Z" fill="black"/>
                        <path d="M284.329 396.382C284.35 396.742 284.307 397.103 284.204 397.444C284.1 397.785 283.938 398.099 283.726 398.368C283.511 398.647 283.26 398.888 282.982 399.083L257.737 417.037C256.792 417.657 255.695 417.914 254.61 417.768C253.829 417.688 253.07 417.428 252.38 417.005L220.95 397.256L220.557 396.986C219.922 396.522 219.431 395.844 219.155 395.047C218.95 394.405 218.955 393.702 219.169 393.064C219.382 392.426 219.79 391.895 220.319 391.568L244.161 374.091C245.111 373.452 246.22 373.184 247.317 373.328C248.045 373.403 248.755 373.635 249.407 374.011L282.239 393.204C282.803 393.479 283.294 393.918 283.66 394.475C284.027 395.033 284.258 395.691 284.329 396.382ZM254.554 403.341L255.956 401.848L245.634 387.739L244.231 389.232L254.568 403.341H254.554ZM241.637 406.614L252.043 402.769L249.449 400.751L243.25 403.151L244.652 397.065L242.057 395.047L239.827 405.232L241.609 406.614H241.637ZM258.439 395.651L260.641 385.467L258.845 384.084L248.453 387.929L251.047 389.931L257.261 387.548L255.858 393.649L258.453 395.667" fill="white"/>
                        <path d="M258.859 384.084L248.467 387.914L251.047 389.915L257.275 387.532L255.858 393.633L258.453 395.651L260.655 385.451L258.859 384.084Z" fill="black"/>
                        <path d="M283.74 398.384C283.952 398.115 284.114 397.801 284.218 397.46C284.321 397.119 284.364 396.758 284.343 396.398L285.198 400.481C284.939 399.613 284.424 398.872 283.74 398.384Z" fill="#F0F0F0"/>
                        <path d="M283.74 398.384C284.403 398.883 284.898 399.623 285.142 400.481C285.171 400.591 285.195 400.702 285.212 400.815C285.292 401.406 285.208 402.011 284.972 402.546C284.736 403.081 284.359 403.52 283.894 403.802L258.649 421.756C257.705 422.381 256.608 422.643 255.521 422.503C254.739 422.419 253.98 422.154 253.291 421.724L221.861 401.975C221.392 401.716 220.979 401.345 220.649 400.886C220.32 400.428 220.083 399.894 219.954 399.321C219.884 398.912 219.898 398.49 219.996 398.087C220.093 397.685 220.271 397.314 220.515 397.002L220.908 397.272L252.45 417.005C253.14 417.428 253.899 417.688 254.68 417.768C255.765 417.914 256.862 417.657 257.808 417.037L283.053 399.083C283.31 398.888 283.541 398.653 283.74 398.384Z" fill="#DADADA"/>
                    </svg>
                </div>
            </Tween>

        </div>
    )
}

export default Landing;