import React from "react";
import "./Mission.scss";

import { Tween, SplitChars, Reveal, Timeline } from 'react-gsap';

const Mission = () =>{
    return(
        <div className="mission-container">
        
            <div className="text-container">
                <div className="text-box">
                    <Reveal repeat>
                        <Tween from={{ y: '100px' }} stagger={0.1} duration={1} ease="power2.out">
                            <SplitChars
                                className="letter"
                                wrapper={<div style={{ display: 'inline-block', fontFamily: 'Averia Serif Libre', letterSpacing: '4px', color: '#606060'}} />}
                            >
                                On &emsp; a  &emsp; quest  &emsp; for &emsp; innovation
                            </SplitChars>
                        </Tween>
                    </Reveal>
                </div>
            </div>
        

            <div className="svg-container">
                <Tween from={{ opacity:0, scale: 0.1}} delay={1} duration={1} ease="power2.out">
                    <svg width="500" height="336" viewBox="0 0 392 264" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg">
                    <path d="M190.032 260.358L7.61607 152.544C1.81027 149.327 -3.17338 143.927 2.49032 140.415L185.566 34.8551C188.317 33.1499 192.488 32.0334 195.279 33.6574L386.769 144.841C392.575 148.21 393.621 157.63 387.784 161.009L214.108 260.185C210.457 262.307 206.315 263.439 202.093 263.469C197.87 263.499 193.713 262.427 190.032 260.358V260.358Z" fill="url(#paint0_linear)"/>
                    <path d="M293.176 78.4798C283.128 60.4026 270.948 65.2848 270.948 65.2848C269.73 65.0412 249.206 78.967 243.543 81.1695C237.879 83.3721 221.314 80.1545 208.606 84.5901C195.899 89.0256 179.293 100.475 174.644 102.424C169.996 104.372 158.516 108.514 158.516 113.903C158.516 119.293 164.139 120.257 171.955 118.542C179.77 116.826 198.883 106.575 198.883 106.575C198.883 106.575 195.219 115.619 192.529 120.988C189.839 126.357 173.508 143.947 171.995 144.932C170.483 145.916 153.208 166.186 153.208 166.186C149.705 167.08 146.325 168.396 143.139 170.104C143.057 170.349 142.93 170.576 142.763 170.774C140.916 173.007 138.998 175.778 140.571 178.711C141.403 180.274 143.078 180.741 144.063 182.192C144.196 182.363 144.295 182.558 144.352 182.767C144.409 182.976 144.424 183.194 144.396 183.409C144.367 183.623 144.296 183.83 144.187 184.017C144.077 184.204 143.931 184.367 143.758 184.497C144.359 185.651 145.38 186.53 146.61 186.953C150.518 188.414 158.333 179.99 158.333 179.99C158.333 179.99 167.377 178.894 172.99 176.945C172.99 176.945 195.858 181.644 205.358 172.885C205.358 172.885 229.932 167.891 241.462 154.483C257.753 135.421 262.635 126.855 263.843 123.952C264.62 121.759 264.965 119.435 264.858 117.111L295.612 104.667C295.612 104.667 303.184 96.5468 293.176 78.4798Z" fill="#FFC794"/>
                    <path d="M218.097 154.199C216.927 155.353 215.876 156.621 214.96 157.985V157.985C210.756 157.473 206.509 157.419 202.293 157.822C199.197 158.137 195.411 158.35 192.904 160.431C189.616 163.171 190.61 169.901 194.995 170.956C195.838 171.159 196.203 169.86 195.35 169.657C191.514 168.744 191.737 162.755 194.417 160.999C196.68 159.528 200.354 159.355 202.912 159.122C207.32 158.746 211.756 158.865 216.138 159.477C216.889 159.578 216.97 158.553 216.412 158.228C217.184 157.14 218.05 156.121 219 155.183C219.67 154.544 218.716 153.59 218.097 154.199Z" fill="#A97A67"/>
                    <path d="M203.694 152.199C197.32 149.581 190.275 146.383 188.418 139.085C188.371 138.913 188.257 138.767 188.102 138.678C187.947 138.59 187.763 138.566 187.591 138.613C187.418 138.661 187.272 138.774 187.183 138.929C187.095 139.084 187.072 139.268 187.119 139.441C189.149 147.246 196.497 150.687 203.359 153.498C204.13 153.833 204.485 152.524 203.694 152.199Z" fill="#A97A67"/>
                    <path d="M196.132 154.321L195.919 154.381C191.256 155.813 186.902 158.102 183.079 161.131C182.415 161.735 181.653 162.223 180.826 162.573C180.188 162.754 179.53 162.86 178.867 162.887C176.406 163.119 173.992 163.707 171.701 164.633C169.59 165.486 167.438 166.825 166.748 168.987C165.834 171.89 168.077 174.986 170.808 176.265C165.983 177.442 161.108 178.383 156.182 179.087C153.725 179.438 151.259 179.726 148.782 179.949C145.737 180.234 140.327 181.228 140.743 176.265C141.001 174.563 141.844 173.005 143.129 171.86C147.696 167.282 154.537 166.064 160.922 165.059L174.523 162.928C175.216 162.84 175.897 162.673 176.553 162.43C177.194 162.139 177.797 161.771 178.349 161.334C183.252 157.735 187.715 153.572 191.646 148.931C191.869 148.667 192.113 148.322 191.981 147.997C191.737 147.368 190.793 147.835 190.357 148.342C186.887 152.43 183.018 156.16 178.806 159.477C178.126 160.052 177.371 160.534 176.563 160.908C175.819 161.187 175.046 161.381 174.259 161.486L158.13 164.227C154.395 164.866 150.609 165.516 147.209 167.191C144.127 168.609 141.672 171.108 140.307 174.215C139.945 174.892 139.751 175.647 139.74 176.415C139.73 177.183 139.903 177.942 140.246 178.63C140.604 179.371 141.123 180.021 141.766 180.534C142.409 181.047 143.159 181.409 143.961 181.594C143.63 182.346 143.499 183.171 143.581 183.99C143.663 184.808 143.954 185.591 144.428 186.263C145.08 186.955 145.92 187.443 146.844 187.666C147.769 187.889 148.738 187.839 149.635 187.521C151.417 186.85 153.019 185.772 154.314 184.375C155.605 182.979 157.072 181.758 158.678 180.741C160.354 179.929 162.145 179.378 163.987 179.107L170.158 177.869C171.186 177.634 172.232 177.481 173.284 177.412C174.6 177.412 175.913 177.517 177.212 177.726C183.302 178.467 189.555 178.082 195.716 177.726C195.979 177.742 196.237 177.654 196.436 177.483C196.495 177.4 196.534 177.306 196.551 177.207C196.568 177.107 196.563 177.005 196.535 176.908C196.508 176.811 196.46 176.721 196.393 176.645C196.327 176.569 196.245 176.508 196.152 176.468C195.797 176.318 195.406 176.272 195.026 176.336C189.199 176.782 183.349 176.819 177.517 176.448C175.266 176.467 173.045 175.93 171.051 174.884C169.153 173.697 167.844 171.261 168.646 169.17C169.356 167.333 171.356 166.379 173.223 165.739C178.368 163.976 183.819 163.285 189.24 163.709C189.666 163.709 190.204 163.709 190.397 163.354C190.742 162.694 189.666 162.238 188.925 162.258L183.637 162.359C187.27 159.466 191.397 157.255 195.817 155.833C196.171 155.754 196.497 155.583 196.761 155.336C196.825 155.273 196.875 155.199 196.909 155.117C196.943 155.035 196.961 154.947 196.961 154.859C196.961 154.77 196.943 154.682 196.909 154.6C196.875 154.518 196.825 154.444 196.761 154.381C196.667 154.326 196.562 154.292 196.453 154.282C196.345 154.271 196.235 154.284 196.132 154.321V154.321ZM152.72 184.314C151.695 185.258 150.514 186.017 149.229 186.557C148.581 186.82 147.868 186.876 147.188 186.718C146.507 186.56 145.892 186.195 145.426 185.674C144.961 185.153 144.668 184.501 144.587 183.807C144.507 183.113 144.642 182.411 144.976 181.797C144.983 181.75 144.983 181.702 144.976 181.655C149.144 181.37 153.285 180.917 157.4 180.294C155.887 181.675 154.334 183.025 152.72 184.314V184.314Z" fill="#A97A67"/>
                    <path d="M235.737 142.476C230.261 139.129 224.148 136.959 217.787 136.104C211.426 135.25 204.957 135.729 198.791 137.512C198.619 137.559 198.473 137.673 198.384 137.828C198.295 137.983 198.272 138.167 198.319 138.339C198.366 138.512 198.48 138.658 198.635 138.747C198.79 138.835 198.974 138.859 199.147 138.811C205.138 137.072 211.427 136.602 217.611 137.433C223.794 138.263 229.736 140.375 235.057 143.633C235.798 144.089 236.438 142.922 235.737 142.476Z" fill="#A97A67"/>
                    <path d="M228.703 119.638C221.842 120.653 215.072 124.946 208.079 122.368C207.267 122.064 206.911 123.383 207.723 123.668C215.001 126.357 221.933 122.033 229.038 120.937C229.921 120.805 229.556 119.506 228.703 119.638Z" fill="#A97A67"/>
                    <path d="M264.858 116.268C264.634 124.287 258.889 131.25 254.271 137.37C249.881 143.422 245.175 149.24 240.173 154.798C235.418 160.065 229.622 164.288 223.151 167.201C215.681 170.459 207.267 173.179 199.167 170.764C199.1 170.746 199.031 170.741 198.962 170.75C198.894 170.759 198.828 170.781 198.768 170.815C198.708 170.85 198.656 170.896 198.613 170.95C198.571 171.005 198.54 171.067 198.522 171.134C198.504 171.201 198.5 171.27 198.509 171.339C198.517 171.407 198.54 171.473 198.574 171.533C198.608 171.593 198.654 171.645 198.709 171.688C198.764 171.73 198.826 171.761 198.893 171.779C200.591 172.28 202.342 172.583 204.11 172.682C202.414 174.54 200.118 175.74 197.624 176.072C196.974 176.072 196.974 177.087 197.624 177.087C200.632 176.734 203.384 175.223 205.297 172.875C205.328 172.831 205.352 172.783 205.369 172.733C211.002 172.783 216.605 171.027 221.842 168.876C228.835 166.016 235.129 161.682 240.295 156.168C245.696 150.261 250.746 144.042 255.418 137.543C260.077 131.331 265.629 124.419 265.852 116.309C265.834 116.193 265.776 116.087 265.689 116.009C265.601 115.93 265.489 115.885 265.372 115.88C265.254 115.876 265.139 115.912 265.045 115.982C264.952 116.053 264.885 116.154 264.858 116.268V116.268Z" fill="#A97A67"/>

                    <Timeline delay={2.7}>
                        <Tween from={{y: 100, opacity: 0}} duration={0.5} ease="power2">
                            <path d="M129.315 121.942L128.817 195.093L122.808 198.372V120.795L129.315 121.942Z" fill="#68E1FD"/>
                            <path d="M113.765 87.8076L121.469 83.4634L147.94 125.84L141.231 130.478" fill="#68E1FD"/>
                            <g opacity="0.5">
                                <path opacity="0.5" d="M129.315 121.942L128.817 195.093L122.808 198.372V120.795L129.315 121.942Z" fill="#0DA6BF"/>
                                <path opacity="0.5" d="M113.765 87.8076L121.469 83.4634L147.94 125.84L141.231 130.478" fill="#0DA6BF"/>
                            </g>
                            <path d="M86.2989 99.6324L113.765 87.8076L141.231 130.478L122.808 120.795V198.372L103.97 187.339L103.026 109.65L86.2989 99.6324Z" fill="#68E1FD"/>
                        </Tween>
                    
                        <Tween from={{y: 100, opacity: 0}} duration={0.5} ease="power2">
                            <path d="M120.992 23.6394L120.697 66.9596L117.135 68.9084V22.9593L120.992 23.6394Z" fill="#68E1FD"/>
                            <path d="M111.786 3.42055L116.343 0.8526L132.014 25.9434L128.046 28.6941" fill="#68E1FD"/>
                            <g opacity="0.5">
                                <path opacity="0.5" d="M120.992 23.6394L120.697 66.9596L117.135 68.9084V22.9593L120.992 23.6394Z" fill="#0DA6BF"/>
                                <path opacity="0.5" d="M111.786 3.42055L116.343 0.8526L132.014 25.9434L128.046 28.6941" fill="#0DA6BF"/>
                            </g>
                            <path d="M95.5151 10.424L111.786 3.42055L128.046 28.694L117.135 22.9593V68.9083L105.98 62.3717L105.421 16.3618L95.5151 10.424Z" fill="#68E1FD"/>
                        </Tween>
                    
                    <Tween from={{y: 100, opacity: 0}} duration={0.5} ease="power2">
                        <path d="M314.735 111.508L314.227 184.659L308.218 187.927V110.351L314.735 111.508Z" fill="#68E1FD"/>
                        <path d="M299.175 77.3633L306.889 73.0293L333.35 115.395L326.651 120.034" fill="#68E1FD"/>
                        <g opacity="0.5">
                            <path opacity="0.5" d="M314.735 111.508L314.227 184.659L308.218 187.927V110.351L314.735 111.508Z" fill="#0DA6BF"/>
                            <path opacity="0.5" d="M299.175 77.3633L306.889 73.0293L333.35 115.395L326.651 120.034" fill="#0DA6BF"/>
                        </g>
                        <path d="M271.719 89.1982L299.175 77.3633L326.651 120.034L308.218 110.351V187.927L289.38 176.904L288.446 99.2163L271.719 89.1982Z" fill="#68E1FD"/>
                    </Tween>
                    </Timeline>

                    <Tween from={{scale: 0.1, opacity: 0}} delay={4} duration={0.3} ease="slow">
                        <path d="M75.6109 50.2628L55.6053 46.4667C55.6053 46.4667 44.5113 68.6648 55.1891 80.9767L77.2349 82.9255C77.2349 82.9255 63.1975 70.2989 75.6109 50.2628Z" fill="#345157"/>
                    </Tween>

                    <path d="M69.0642 52.6582C65.126 51.7041 61.1505 50.9395 57.1379 50.3643C56.4985 50.273 56.2244 51.2474 56.8639 51.3793C60.8765 51.9612 64.8519 52.7259 68.7901 53.6732C69.4296 53.7849 69.6935 52.8105 69.0642 52.6582Z" fill="white"/>
                    <path d="M64.6997 54.2517C62.121 53.9662 59.5596 53.5427 57.0263 52.983C56.3868 52.8409 56.1128 53.8254 56.7522 53.998C59.3762 54.5727 62.0292 55.0064 64.6997 55.2972C65.3493 55.3378 65.3391 54.3228 64.6997 54.2517Z" fill="white"/>
                    <path d="M67.4503 59.4282L54.3162 56.9618C53.6768 56.84 53.4027 57.8245 54.0422 57.9768L67.1763 60.4128C67.8157 60.5245 68.0898 59.55 67.4503 59.4282Z" fill="white"/>
                    <path d="M60.4367 60.1387L53.9407 59.3876C53.2911 59.3166 53.3012 60.3316 53.9407 60.4026L60.4367 61.1537C61.0863 61.2248 61.0863 60.2098 60.4367 60.1387Z" fill="white"/>
                    <path d="M66.1308 65.2036C61.7189 64.4931 57.2868 63.9687 52.8343 63.6303C52.1847 63.6303 52.1847 64.6453 52.8343 64.6453C57.1988 64.9701 61.5396 65.481 65.8568 66.178C66.5064 66.2897 66.7804 65.3051 66.1308 65.2036Z" fill="white"/>
                    <path d="M57.7977 66.8479C56.2449 66.7866 54.6984 66.617 53.1693 66.3404C52.5298 66.2287 52.2558 67.2031 52.8952 67.3554C54.5113 67.6515 56.146 67.8346 57.7875 67.9035C58.4574 67.8933 58.4574 66.8783 57.7977 66.8479Z" fill="white"/>
                    <path d="M66.618 70.9485C62.6595 70.8199 58.7078 70.6034 54.7628 70.2989C54.1132 70.2989 54.1132 71.3139 54.7628 71.3139C58.7145 71.6184 62.6663 71.8349 66.618 71.9635C67.2778 71.9838 67.2778 70.9688 66.618 70.9485Z" fill="white"/>
                    <path d="M61.1472 73.0191C59.151 72.9785 57.1582 72.9785 55.1688 73.0191C54.5192 73.0191 54.5192 74.0341 55.1688 74.0341C57.165 73.9664 59.1578 73.9664 61.1472 74.0341C61.2818 74.0341 61.4108 73.9806 61.506 73.8855C61.6012 73.7903 61.6547 73.6612 61.6547 73.5266C61.6547 73.392 61.6012 73.2629 61.506 73.1677C61.4108 73.0726 61.2818 73.0191 61.1472 73.0191Z" fill="white"/>
                    <path d="M68.8409 76.6426C64.5982 76.1284 60.3453 75.79 56.0823 75.6276C55.4327 75.6276 55.4327 76.6426 56.0823 76.6426C60.3453 76.8321 64.5982 77.1704 68.8409 77.6576C69.4905 77.7388 69.4803 76.7238 68.8409 76.6426Z" fill="white"/>

                    <Tween from={{scale: 0.1, opacity: 0}} delay={4.3} duration={0.3} ease="slow">
                        <path d="M276.896 3.78595L296.901 0C296.901 0 307.995 22.198 297.317 34.51L275.272 36.4588C275.272 36.4588 289.309 23.8322 276.896 3.78595Z" fill="#345157"/>
                    </Tween>
                    <path d="M283.452 6.2118C287.391 5.2577 291.366 4.49306 295.379 3.9179C296.018 3.82655 296.292 4.80095 295.653 4.9329C291.64 5.51483 287.665 6.27946 283.727 7.2268C283.128 7.31815 282.813 6.3336 283.452 6.2118Z" fill="white"/>
                    <path d="M287.817 7.78504C290.396 7.49951 292.957 7.07599 295.49 6.51629C296.13 6.37419 296.404 7.35874 295.764 7.53129C293.14 8.10603 290.487 8.53972 287.817 8.83049C287.188 8.87109 287.188 7.85609 287.817 7.78504Z" fill="white"/>
                    <path d="M285.066 12.9615L298.2 10.5255C298.84 10.4037 299.114 11.3883 298.474 11.5405L285.34 13.9765C284.691 14.0577 284.417 13.0833 285.066 12.9615Z" fill="white"/>
                    <path d="M292.07 13.672L298.566 12.9209C299.215 12.8499 299.205 13.8649 298.566 13.9359L292.07 14.687C291.42 14.7581 291.43 13.7431 292.07 13.672Z" fill="white"/>
                    <path d="M286.376 18.7369C290.788 18.0264 295.22 17.502 299.672 17.1637C300.322 17.1637 300.322 18.1787 299.672 18.1787C295.308 18.5035 290.967 19.0143 286.65 19.7113C286.01 19.8128 285.736 18.8384 286.376 18.7369Z" fill="white"/>
                    <path d="M294.709 20.4218C296.262 20.3605 297.808 20.1909 299.337 19.9143C299.977 19.8026 300.251 20.777 299.611 20.9293C297.995 21.2254 296.361 21.4085 294.719 21.4774C294.059 21.4368 294.059 20.4218 294.709 20.4218Z" fill="white"/>
                    <path d="M285.888 24.4818C289.847 24.3532 293.799 24.1367 297.744 23.8322C298.393 23.8322 298.393 24.8472 297.744 24.8472C293.792 25.1517 289.84 25.3682 285.888 25.4968C285.239 25.4968 285.239 24.4818 285.888 24.4818Z" fill="white"/>
                    <path d="M291.359 26.5118C293.355 26.4712 295.348 26.4712 297.338 26.5118C297.987 26.5118 297.987 27.5268 297.338 27.5268C295.342 27.4591 293.349 27.4591 291.359 27.5268C291.225 27.5268 291.096 27.4733 291 27.3782C290.905 27.283 290.852 27.1539 290.852 27.0193C290.852 26.8847 290.905 26.7556 291 26.6604C291.096 26.5653 291.225 26.5118 291.359 26.5118Z" fill="white"/>
                    <path d="M283.676 30.1759C287.918 29.6617 292.171 29.3233 296.434 29.1609C297.084 29.1609 297.084 30.1759 296.434 30.1759C292.171 30.3654 287.918 30.7037 283.676 31.1909C283.026 31.2721 283.036 30.247 283.676 30.1759Z" fill="white"/>

                    <Timeline delay={1.8}>
                        <Tween from={{scale: 0.01}} duration={0.3} ease="elastic">
                            <path d="M192.986 19.6402L188.195 15.0321C187.949 14.7869 187.658 14.5923 187.338 14.4596C187.017 14.3269 186.674 14.2586 186.327 14.2586C185.98 14.2586 185.637 14.3269 185.316 14.4596C184.996 14.5923 184.705 14.7869 184.46 15.0321C184.214 15.2774 184.02 15.5686 183.887 15.889C183.754 16.2094 183.686 16.5529 183.686 16.8997C183.686 17.2466 183.754 17.59 183.887 17.9105C184.02 18.2309 184.214 18.5221 184.46 18.7673L189.25 23.3754C189.496 23.6207 189.787 23.8152 190.107 23.948C190.428 24.0807 190.771 24.149 191.118 24.149C191.465 24.149 191.808 24.0807 192.129 23.948C192.449 23.8152 192.74 23.6207 192.986 23.3754C193.231 23.1302 193.425 22.839 193.558 22.5186C193.691 22.1981 193.759 21.8547 193.759 21.5078C193.759 21.161 193.691 20.8175 193.558 20.4971C193.425 20.1767 193.231 19.8855 192.986 19.6402V19.6402Z" fill="#FBB03B"/>
                        </Tween>   
                        <Tween from={{scale: 0.01}} duration={0.3} ease="elastic">
                            <path d="M198.213 6.01895V14.9712C198.213 18.3613 203.491 18.3715 203.491 14.9712V6.01895C203.491 2.62885 198.213 2.6187 198.213 6.01895Z" fill="#FBB03B"/>
                        </Tween>
                        <Tween from={{scale: 0.01}} duration={0.3} ease="elastic">
                            <path d="M215.864 15.905C215.362 15.4213 214.693 15.151 213.996 15.151C213.299 15.151 212.63 15.4213 212.128 15.905L208.211 19.6402C207.72 20.1379 207.444 20.8088 207.444 21.5079C207.444 22.2069 207.72 22.8778 208.211 23.3755C208.712 23.8592 209.381 24.1295 210.078 24.1295C210.775 24.1295 211.444 23.8592 211.946 23.3755L215.864 19.6402C216.355 19.1426 216.63 18.4717 216.63 17.7726C216.63 17.0736 216.355 16.4027 215.864 15.905V15.905Z" fill="#FBB03B"/>
                        </Tween>
                    </Timeline>

                    <path opacity="0.56" d="M177.842 143.734C177.842 143.734 190.712 124.074 207.277 127.322C223.842 130.57 221.223 138.659 212.281 146.079C203.339 153.498 189.809 160.989 176.553 162.43C163.297 163.872 177.842 143.734 177.842 143.734Z" fill="url(#paint1_linear)"/>

                    <Tween from={{scale: 0.01}} delay={1.5} duration={0.5} ease="power4">
                        <path d="M215.265 106.93C217.894 106.859 223.385 100.262 225.1 98.2926C228.12 94.9603 230.627 91.1975 232.54 87.1276C243.157 64.148 228.937 33.3326 202.466 31.4751C200.589 31.3671 198.709 31.3671 196.832 31.4751C179.466 32.277 166.22 49.5929 164.616 65.9243C163.937 74.1659 165.38 82.4441 168.808 89.9696C170.463 93.5462 172.688 96.8303 175.396 99.6933C177.283 101.723 182.927 107.813 185.83 107.722L215.265 106.93Z" fill="#FBB03B"/>
                        <path d="M202.943 31.5259C221.294 50.2425 219.822 81.5552 211.682 107.022L215.244 106.93C217.873 106.859 223.364 100.262 225.08 98.2926C228.1 94.9603 230.607 91.1975 232.52 87.1276C243.086 64.2799 229.109 33.698 202.943 31.5259Z" fill="#E29127"/>
                        <path d="M206.861 108.656L209.418 73.689C209.743 69.2941 209.175 64.2089 211.865 60.3113C216.696 53.318 225.06 60.9812 220.472 66.7464C215.884 72.5116 204.384 72.136 197.786 71.8214C179.516 71.0398 176.187 62.4022 180.176 59.073C182.47 57.1546 185.738 57.8956 188.073 59.3166C191.585 61.4582 191.453 65.6908 191.778 69.294C192.102 72.8973 192.407 76.2366 192.711 79.7181C193.388 87.1614 194.041 94.5811 194.67 101.977L195.249 108.625" stroke="#F2F2F2" strokeWidth="3.045" strokeMiterlimit="10"/>
                        <path d="M183.12 116.755H217.335C220.25 116.755 222.613 114.392 222.613 111.477C222.613 108.562 220.25 106.199 217.335 106.199H183.12C180.205 106.199 177.842 108.562 177.842 111.477C177.842 114.392 180.205 116.755 183.12 116.755Z" fill="#CCCCCC"/>
                        <path d="M183.12 127.322H217.335C220.25 127.322 222.613 124.959 222.613 122.044C222.613 119.129 220.25 116.766 217.335 116.766H183.12C180.205 116.766 177.842 119.129 177.842 122.044C177.842 124.959 180.205 127.322 183.12 127.322Z" fill="#CCCCCC"/>
                        <path d="M217.335 106.21H211.885C213.103 109.681 211.012 115.578 208.058 117.953C199.52 119.227 190.808 118.691 182.49 116.38C182.348 116.357 182.202 116.388 182.08 116.466C181.958 116.544 181.869 116.664 181.831 116.803C181.792 116.942 181.805 117.091 181.869 117.221C181.933 117.35 182.042 117.452 182.176 117.507C193.384 120.618 205.236 120.559 216.412 117.334C216.522 117.306 216.621 117.244 216.694 117.157C216.767 117.069 216.81 116.961 216.818 116.847L217.325 116.766C218.725 116.766 220.068 116.21 221.057 115.22C222.047 114.23 222.603 112.887 222.603 111.488C222.603 110.088 222.047 108.745 221.057 107.755C220.068 106.766 218.725 106.21 217.325 106.21H217.335Z" fill="#B2AFAB"/>
                        <path d="M180.389 126.56C180.389 126.56 188.773 131.432 201.704 131.148C214.635 130.864 220.086 126.56 220.086 126.56" fill="#CCCCCC"/>
                        <path d="M217.335 116.766H209.763C212.616 119.415 210.159 127.311 208.109 130.631L209.662 130.499C212.575 130.499 222.481 128.063 222.613 122.044C222.619 121.349 222.486 120.66 222.223 120.017C221.959 119.375 221.571 118.791 221.08 118.299C220.588 117.808 220.004 117.42 219.362 117.156C218.719 116.893 218.03 116.76 217.335 116.766V116.766Z" fill="#B2AFAB"/>
                    </Tween>

                    <defs>
                    <linearGradient id="paint0_linear" x1="164" y1="48" x2="189" y2="356" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#393838"/>
                    <stop offset="1" stopColor="white" stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="183.911" y1="153.773" x2="230.947" y2="112.33" gradientUnits="userSpaceOnUse">
                    <stop offset="0.01" stopColor="#FFC2A4"/>
                    <stop offset="1" stopColor="#DD6F31"/>
                    </linearGradient>
                    </defs>
                    </svg>
                </Tween>
            </div>
            
        </div>
    )
}

export default Mission;