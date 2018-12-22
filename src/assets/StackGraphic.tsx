import * as React from 'react'
import './assets.css'

interface StackGraphicProps {
  isHovering: boolean;
  idx: string | null;
  startHover: any;
  endHover: any;
  setActive: any;
}

export default class StackGraphic extends React.Component <StackGraphicProps> {

  render() {
    const activeStack = (idx: number) => '' + idx === this.props.idx && !this.props.isHovering ? 'stack-active' : 'stack'

    return (
      <svg className="stack-container" viewBox="0 0 610 482" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g onClick={this.props.setActive} onMouseOver={this.props.startHover} onMouseOut={this.props.endHover}>
          <g className={activeStack(0)}>
            <path d="M194.5,0 C207.393121,0 220.297557,2.03412218 229.796262,5.76334618 L376.440663,66.1089708 C381.192845,67.8040726 384.581603,70.1772152 386.623909,72.2113374 C388.654901,74.2454595 389,75.601541 389,76.9576225 C389,78.3137039 388.654901,80.0088057 386.623909,82.0429279 C384.58726,84.0770501 381.192845,86.1111723 376.440663,88.1452944 L229.796262,148.151899 C210.793194,155.949367 178.206806,155.949367 159.19808,148.151899 L12.5593368,88.1452944 C7.80715532,86.1111723 4.41839732,84.0770501 2.37609075,82.0429279 C0.333784177,80.0088057 0,78.3137039 0,76.9576225 C0,75.601541 0.339441536,74.2454595 2.37609075,72.2113374 C4.41273997,70.1772152 7.80715532,67.8040726 12.5593368,66.1089708 L159.19808,5.76334618 C168.696786,2.03412218 181.601222,0 194.5,0 Z" id="0" />
            <g transform="translate(0.000000, 55.000000)">
              <path d="M40,44.4177845 L159.19808,93.1565441 C178.206806,100.947819 210.793194,100.947819 229.796262,93.1565441 L349,44.4173517 L349,56 L349,56.2563121 L233.196335,103.763901 C211.126978,112.91018 177.861707,112.91018 155.803665,103.763901 L40,56.2563121 L40,56 L40,44.4177845 Z" id="0" fill-opacity="0" fill="#FFFFFF"/>
            </g>
            <g className="arrow" transform="translate(364.000000, 62.000000)">
              <g transform="translate(24.000000, 0.000000)">
                <path d="M221.9174,14.8360792 L209.295672,29.0126583 L206.094509,26.3145352 L212.085257,19.7292855 C213.426703,18.3268642 214.539477,17.3207945 215.423612,16.7110461 L178.061467,16.7110461 L178.061467,12.9611122 L215.469343,12.9611122 C214.79862,12.5342884 214.249855,12.1227144 213.823031,11.7263779 C213.396207,11.3300415 212.816955,10.7355457 212.085257,9.9428728 L206.094509,3.35762313 L209.295672,0.6595 L221.9174,14.8360792 Z" id="-&gt;" />
                <path d="M0.719996493,15 L213,15" stroke-width="4.6" fill-rule="nonzero" stroke-linecap="square" />
              </g>
            </g>
            <polygon id="0" className="flatE" points="220.841554 71.761154 215.185906 73.6563128 205.446683 64.6214953 195.609609 67.9178142 204.933416 76.5672603 199.277768 78.4624191 189.953962 69.812973 179.312768 73.3787457 189.267392 82.6133854 183.611745 84.5085442 169.50295 71.4201908 206.94816 58.8726229" />
            <g>
              <path d="M149.636332,79.0278006 C149.320851,78.7351371 149.20028,78.376029 149.339619,78.0067869 C150.599174,74.7066614 152.149068,71.2651077 153.9415,67.7773657 C157.230135,60.6985614 161.339779,54.2059116 166.14338,48.5185438 C166.185032,48.3517995 166.271581,48.1688788 166.399144,48.0220119 C170.777168,43.0046503 175.7104,38.4225785 181.063934,34.4058836 C193.383922,25.2027612 205.35044,21.2370226 216.634824,22.6165363 C227.845971,23.8802534 234.834526,30.0662412 237.36678,41.0015631 C237.874126,43.1392092 238.331157,45.4216041 238.725153,47.7851045 C238.735354,47.8563821 238.738343,47.9289449 238.732326,48.00113 C238.687649,48.4382467 238.663626,48.8028 238.662051,49.0964529 C238.703452,49.2704517 238.692656,49.4359104 238.673197,49.5793737 C238.66479,49.6353833 238.653225,49.6924512 238.631759,49.74831 L238.31079,50.6469626 C238.023406,51.4551376 236.592544,52.016094 235.116219,51.9007805 C233.63968,51.7832751 232.679026,51.0356711 232.964831,50.2280252 L233.221359,49.5048854 C233.219053,49.4728369 233.214273,49.440486 233.213547,49.4079083 C233.207268,49.0670897 233.227406,48.6291422 233.28049,48.0941411 C232.895116,45.8024475 232.453237,43.5919349 231.961085,41.5182345 C229.730755,31.8919101 224.099335,26.5062772 215.227724,25.5066092 C206.267682,24.4109484 196.252746,27.9637932 185.415425,36.0578061 C180.352867,39.8558992 175.672927,44.1923856 171.497619,48.9471561 C171.424686,49.1945517 171.280182,49.4772476 170.979475,49.7466436 C166.362929,55.2366515 162.399242,61.5117607 159.199674,68.40001 C157.419105,71.8588778 155.903353,75.2324031 154.672305,78.4652562 C154.361961,79.2720711 152.919447,79.8222189 151.448585,79.6960209 C150.651825,79.6268763 150.009173,79.3736757 149.636332,79.0278006 Z" id="0" fill="#FFFFFF" fill-rule="nonzero" />
              <path d="M179.542081,48.5308711 C179.273756,48.2819535 179.144322,47.9842286 179.199372,47.6700128 C179.34494,46.8529157 180.677544,46.2227909 182.175548,46.259099 L186.270589,46.3611969 C186.338651,46.3644537 186.407397,46.3663483 186.475673,46.3717998 C192.666034,46.7848669 199.084601,47.4455635 205.558116,48.3348875 C217.973311,49.9495192 229.20881,51.9628563 238.919552,54.3182775 C239.066577,54.3528684 239.207922,54.3961621 239.34021,54.4470233 C249.060888,56.7118576 257.659898,59.4012815 264.905652,62.4421805 C280.972713,68.7779415 287.471539,75.1061423 284.155432,81.2238788 C281.091339,87.4316827 269.177802,91.4702682 248.769753,93.1878377 C244.286417,93.6736725 239.391815,94.00155 234.34328,94.1487008 C234.189512,94.1537653 234.033307,94.1505807 233.882997,94.140888 L232.035097,94.0235145 C230.547079,93.9305991 229.547065,93.1925418 229.79855,92.3818814 C230.044181,91.569783 231.453402,90.9887766 232.937576,91.0841136 L234.552917,91.1853586 C239.259224,91.0440975 243.80724,90.7360344 248.079005,90.2735004 C266.14181,88.7536641 276.476289,85.4878481 278.908439,80.5581571 C281.53381,75.7099038 275.663907,70.4322232 261.492216,64.8427275 C254.426181,61.878725 246.064102,59.2753569 236.575011,57.0836372 C236.399614,57.0426883 236.237119,56.9917502 236.086158,56.9335475 C226.758729,54.6921888 215.967764,52.7678672 204.003805,51.2105417 C197.748794,50.3522544 191.582355,49.7158604 185.640574,49.3158197 L181.651022,49.2157693 C180.734771,49.1941653 179.966554,48.9246438 179.542081,48.5308711 Z" id="0" fill="#FFFFFF" fill-rule="nonzero" />
              <path d="M162.146022,114.925628 C158.854556,111.872223 156.564323,107.735375 155.294724,102.537044 C154.494825,99.6619244 154.072229,96.6080064 154.041136,93.4855115 L154.114665,92.2108949 C154.164498,91.3916147 155.412264,90.723048 156.91198,90.7179926 C158.412598,90.7137735 159.584155,91.370812 159.53589,92.1895666 L159.467945,93.4099454 C159.494978,96.3345783 159.900756,99.2461382 160.665559,102.005516 C163.007741,111.583649 168.757367,116.998627 177.755447,118.130687 C186.515338,119.146756 196.462523,115.601795 207.281673,107.585531 C212.912562,103.272709 218.01699,98.2358152 222.430082,92.6348308 C226.526111,87.4269721 230.17416,81.5302166 233.277615,75.1124107 C235.010899,71.1311614 236.586806,67.2811981 237.946993,63.7084351 C238.25316,62.9011633 239.688889,62.3574503 241.156493,62.4929345 C242.624097,62.6284187 243.564105,63.3915076 243.256605,64.2015031 C241.888019,67.8021255 240.29944,71.6779647 238.535713,75.7240591 C235.346029,82.3233073 231.60686,88.3632992 227.402422,93.7122189 C222.828246,99.5163129 217.524316,104.746422 211.636287,109.260389 C199.349376,118.365016 187.496565,122.312884 176.384478,121.024015 C170.47452,120.27903 165.718764,118.239965 162.146022,114.925628 Z" id="0" fill="#FFFFFF" fill-rule="nonzero" />
              <path d="M109.31753,69.9701726 C105.748563,66.6593365 104.767691,63.3762205 106.40133,60.1473158 C109.524391,53.9886519 121.401072,50.0065979 141.699305,48.3101471 C146.614599,47.8852483 151.717803,47.6048787 156.862043,47.4737904 C157.96345,47.3714991 159.050237,47.3926755 160.096544,47.5391452 L161.754569,47.6493665 C163.242714,47.7469678 164.242837,48.4880778 164.001526,49.3008755 C163.76269,50.1139837 162.360934,50.6942886 160.882458,50.5957275 L159.035885,50.4734413 C158.892333,50.4633998 158.757984,50.4479943 158.622267,50.427347 C158.261246,50.3704682 157.890062,50.3637387 157.485095,50.4070927 C157.352203,50.4208414 157.211651,50.4314563 157.076021,50.4347215 C152.075711,50.556343 147.11105,50.8301913 142.325502,51.2423954 C124.428271,52.7373977 114.109039,55.9638456 111.643028,60.8295153 C109.152233,65.7456731 115.034856,71.1075006 129.116239,76.7648882 C136.831255,79.9758583 145.973221,82.7907561 156.314271,85.1491268 C156.517586,85.2007071 156.737122,85.2593924 156.944107,85.3302645 C165.899729,87.384461 176.027557,89.1359288 187.048726,90.5424417 C194.203286,91.5116893 201.166615,92.2896366 207.775796,92.8601912 L212.170128,92.9906515 C213.665728,93.0355907 214.761523,93.7343813 214.621679,94.551941 C214.47869,95.3705547 213.154492,95.9989764 211.655746,95.9550911 L207.123512,95.8218167 C207.03285,95.8191344 206.941051,95.8134126 206.851495,95.8057991 C200.047679,95.2195189 192.890821,94.4209148 185.571974,93.4303329 C174.177668,91.9755614 163.670763,90.1504638 154.370196,88.0066394 C154.193471,87.9678107 154.027494,87.91512 153.874767,87.8568489 C143.229546,85.4248297 133.744354,82.4980667 125.736467,79.1663384 C118.088757,76.0912864 112.604809,73.0196931 109.31753,69.9701726 Z" id="0" fill="#FFFFFF" fill-rule="nonzero" />
            </g>
          </g>
          <g className={activeStack(1)}>
            <path d="M39.3752182,109 L155.803665,156.763901 C177.861707,165.91018 211.126978,165.91018 233.196335,156.763901 L349.624782,109 L376.440663,119.840034 C381.192845,121.872541 384.581603,124.243798 386.623909,126.276305 C388.654901,127.97006 389,129.663815 389,131.01882 C389,132.373824 388.654901,134.067579 386.623909,136.100086 C384.58726,138.132592 381.192845,140.159453 376.440663,142.197605 L229.796262,202.156544 C210.793194,209.947819 178.206806,209.947819 159.19808,202.156544 L12.5593368,142.197605 C7.80715532,140.165098 4.41839732,138.132592 2.37609075,136.100086 C0.333784177,134.067579 0,132.373824 0,131.01882 C0,129.663815 0.339441536,127.97006 2.37609075,126.276305 C4.41273997,124.243798 7.80715532,121.872541 12.5593368,119.840034 L39.3752182,109 Z" id="1" />
            <g transform="translate(0.000000, 109.000000)">
              <path d="M40,44.4177845 L159.19808,93.1565441 C178.206806,100.947819 210.793194,100.947819 229.796262,93.1565441 L349,44.4173517 L349,56 L349,56.2563121 L233.196335,103.763901 C211.126978,112.91018 177.861707,112.91018 155.803665,103.763901 L40,56.2563121 L40,56 L40,44.4177845 Z" id="1" fill-opacity="0" fill="#FFFFFF"/>
            </g>
            <g className="arrow" transform="translate(364.000000, 62.000000)">
              <path d="M245.9174,14.8360792 L233.295672,29.0126583 L230.094509,26.3145352 L236.085257,19.7292855 C237.426703,18.3268642 238.539477,17.3207945 239.423612,16.7110461 L202.061467,16.7110461 L202.061467,12.9611122 L239.469343,12.9611122 C238.79862,12.5342884 238.249855,12.1227144 237.823031,11.7263779 C237.396207,11.3300415 236.816955,10.7355457 236.085257,9.9428728 L230.094509,3.35762313 L233.295672,0.6595 L245.9174,14.8360792 Z" id="-&gt;" />
              <path d="M149,15 L237,15" stroke-width="4.6" fill-rule="nonzero" stroke-linecap="square" />
              <path d="M-3.83693077e-13,69.0000009 L99.1615426,69.0000009 C110.20414,69.0000009 119.155934,60.0527089 119.155934,49.0074808 L119.155934,34.9925201 C119.155934,23.9509561 128.102545,15 139.158926,15 L235.323659,15" fill="none" stroke-width="4.6" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          </g>
          <g className={activeStack(2)}>
            <path d="M39.3752182,163 L155.803665,210.763901 C177.861707,219.91018 211.126978,219.91018 233.196335,210.763901 L349.624782,163 L376.440663,173.840034 C381.192845,175.866895 384.581603,177.905047 386.623909,179.937553 C388.654901,181.964414 389,183.663815 389,185.013174 C389,186.368178 388.654901,188.061933 386.623909,189.755689 C384.58726,191.788195 381.192845,194.159453 376.440663,196.197605 L229.796262,256.156544 C210.793194,263.947819 178.206806,263.947819 159.19808,256.156544 L12.5593368,196.197605 C7.80715532,194.165098 4.41839732,191.793841 2.37609075,189.755689 C0.339441536,188.061933 0,186.368178 0,185.013174 C0,183.663815 0.339441536,181.964414 2.37609075,179.937553 C4.41273997,177.905047 7.80715532,175.866895 12.5593368,173.840034 L39.3752182,163 Z" id="2" />
            <g transform="translate(0.000000, 163.000000)">
              <path d="M40,44.4177845 L159.19808,93.1565441 C178.206806,100.947819 210.793194,100.947819 229.796262,93.1565441 L349,44.4173517 L349,56 L349,56.2563121 L233.196335,103.763901 C211.126978,112.91018 177.861707,112.91018 155.803665,103.763901 L40,56.2563121 L40,56 L40,44.4177845 Z" id="2" fill-opacity="0" fill="#FFFFFF"/>
            </g>
            <g className="arrow" transform="translate(364.000000, 62.000000)">
              <path d="M245.9174,14.8360792 L233.295672,29.0126583 L230.094509,26.3145352 L236.085257,19.7292855 C237.426703,18.3268642 238.539477,17.3207945 239.423612,16.7110461 L202.061467,16.7110461 L202.061467,12.9611122 L239.469343,12.9611122 C238.79862,12.5342884 238.249855,12.1227144 237.823031,11.7263779 C237.396207,11.3300415 236.816955,10.7355457 236.085257,9.9428728 L230.094509,3.35762313 L233.295672,0.6595 L245.9174,14.8360792 Z" id="-&gt;" />
              <path d="M149,15 L237,15" stroke-width="4.6" fill-rule="nonzero" stroke-linecap="square" />
              <path d="M-3.83693077e-13,123.000001 L99.1615426,123.000001 C110.20414,123.000001 119.155934,114.046991 119.155934,103.002241 L119.155934,34.9977599 C119.155934,23.9533021 128.102545,15 139.158926,15 L235.323659,15" fill="none" stroke-width="4.6" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          </g>
          <g className={activeStack(3)} >
            <path d="M39.3752182,219 L155.803665,266.763901 C177.861707,275.91018 211.126978,275.91018 233.196335,266.763901 L349.624782,219 L376.440663,229.840034 C381.192845,231.872541 384.581603,234.243798 386.623909,236.276305 C388.654901,237.97006 389,239.663815 389,241.01882 C389,242.373824 388.654901,244.067579 386.623909,246.100086 C384.58726,248.132592 381.192845,250.159453 376.440663,252.197605 L229.796262,312.156544 C210.793194,319.947819 178.206806,319.947819 159.19808,312.156544 L12.5593368,252.197605 C7.80715532,250.165098 4.41839732,248.132592 2.37609075,246.100086 C0.333784177,244.067579 0,242.373824 0,241.01882 C0,239.663815 0.339441536,237.97006 2.37609075,236.276305 C4.41273997,234.243798 7.80715532,231.872541 12.5593368,229.840034 L39.3752182,219 Z" id="3" />
            <g transform="translate(0.000000, 219.000000)">
              <path d="M40,44.4177845 L159.19808,93.1565441 C178.206806,100.947819 210.793194,100.947819 229.796262,93.1565441 L349,44.4173517 L349,56 L349,56.2563121 L233.196335,103.763901 C211.126978,112.91018 177.861707,112.91018 155.803665,103.763901 L40,56.2563121 L40,56 L40,44.4177845 Z" id="3" fill-opacity="0" fill="#FFFFFF"/>
            </g>
            <g className="arrow" transform="translate(364.000000, 62.000000)">
              <path d="M245.9174,14.8360792 L233.295672,29.0126583 L230.094509,26.3145352 L236.085257,19.7292855 C237.426703,18.3268642 238.539477,17.3207945 239.423612,16.7110461 L202.061467,16.7110461 L202.061467,12.9611122 L239.469343,12.9611122 C238.79862,12.5342884 238.249855,12.1227144 237.823031,11.7263779 C237.396207,11.3300415 236.816955,10.7355457 236.085257,9.9428728 L230.094509,3.35762313 L233.295672,0.6595 L245.9174,14.8360792 Z" id="-&gt;" />
              <path d="M149,15 L237,15" stroke-width="4.6" fill-rule="nonzero" stroke-linecap="square" />
              <path d="M-3.83693077e-13,179.000001 L99.1615426,179.000001 C110.20414,179.000001 119.155934,170.036961 119.155934,158.992918 L119.155934,35.0070832 C119.155934,23.9574763 128.102545,15 139.158926,15 L235.323659,15" fill="none" stroke-width="4.6" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          </g>
          <g className={activeStack(4)}>
            <path d="M39.3752182,273 L155.803665,320.763901 C177.861707,329.91018 211.126978,329.91018 233.196335,320.763901 L349.624782,273 L376.440663,283.840034 C381.192845,285.866895 384.581603,287.905047 386.623909,289.937553 C388.654901,291.964414 389,293.663815 389,295.013174 C389,296.368178 388.654901,298.061933 386.623909,299.755689 C384.58726,301.788195 381.192845,304.159453 376.440663,306.197605 L229.796262,366.156544 C210.793194,373.947819 178.206806,373.947819 159.19808,366.156544 L12.5593368,306.197605 C7.80715532,304.165098 4.41839732,301.793841 2.37609075,299.755689 C0.339441536,298.061933 0,296.368178 0,295.013174 C0,293.663815 0.339441536,291.964414 2.37609075,289.937553 C4.41273997,287.905047 7.80715532,285.866895 12.5593368,283.840034 L39.3752182,273 Z" id="4"/>
            <g transform="translate(0.000000, 273.000000)">
              <path d="M40,44.4177845 L159.19808,93.1565441 C178.206806,100.947819 210.793194,100.947819 229.796262,93.1565441 L349,44.4173517 L349,56 L349,56.2563121 L233.196335,103.763901 C211.126978,112.91018 177.861707,112.91018 155.803665,103.763901 L40,56.2563121 L40,56 L40,44.4177845 Z" id="4" fill-opacity="0" fill="#FFFFFF"/>
            </g>
            <g className="arrow" transform="translate(364.000000, 62.000000)">
              <path d="M245.9174,14.8360792 L233.295672,29.0126583 L230.094509,26.3145352 L236.085257,19.7292855 C237.426703,18.3268642 238.539477,17.3207945 239.423612,16.7110461 L202.061467,16.7110461 L202.061467,12.9611122 L239.469343,12.9611122 C238.79862,12.5342884 238.249855,12.1227144 237.823031,11.7263779 C237.396207,11.3300415 236.816955,10.7355457 236.085257,9.9428728 L230.094509,3.35762313 L233.295672,0.6595 L245.9174,14.8360792 Z" id="-&gt;" />
              <path d="M149,15 L237,15" stroke-width="4.6" fill-rule="nonzero" stroke-linecap="square" />
              <path d="M-3.83693077e-13,233.000001 L99.1615426,233.000001 C110.20414,233.000001 119.155934,224.047721 119.155934,213.003306 L119.155934,34.9966944 C119.155934,23.9528251 128.102545,15 139.158926,15 L235.323659,15" fill="none" stroke-width="4.6" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          </g>
          <g className={activeStack(5)}>
            <path d="M39.3752182,329 L155.803665,376.763901 C177.861707,385.91018 211.126978,385.91018 233.196335,376.763901 L349.624782,329 L376.440663,339.840034 C381.192845,341.872541 384.581603,344.243798 386.623909,346.276305 C388.654901,347.97006 389,349.663815 389,351.01882 C389,352.373824 388.654901,354.067579 386.623909,356.100086 C384.58726,358.132592 381.192845,360.159453 376.440663,362.197605 L229.796262,422.156544 C210.793194,429.947819 178.206806,429.947819 159.19808,422.156544 L12.5593368,362.197605 C7.80715532,360.165098 4.41839732,358.132592 2.37609075,356.100086 C0.333784177,354.067579 0,352.373824 0,351.01882 C0,349.663815 0.339441536,347.97006 2.37609075,346.276305 C4.41273997,344.243798 7.80715532,341.872541 12.5593368,339.840034 L39.3752182,329 Z" id="5" />
            <g className="arrow" transform="translate(364.000000, 62.000000)">
              <path d="M245.9174,14.8360792 L233.295672,29.0126583 L230.094509,26.3145352 L236.085257,19.7292855 C237.426703,18.3268642 238.539477,17.3207945 239.423612,16.7110461 L202.061467,16.7110461 L202.061467,12.9611122 L239.469343,12.9611122 C238.79862,12.5342884 238.249855,12.1227144 237.823031,11.7263779 C237.396207,11.3300415 236.816955,10.7355457 236.085257,9.9428728 L230.094509,3.35762313 L233.295672,0.6595 L245.9174,14.8360792 Z" id="-&gt;" />
              <path d="M149,15 L237,15" stroke-width="4.6" fillRule="nonzero" stroke-linecap="square" />
              <path d="M-3.83693077e-13,289.000001 L99.1615426,289.000001 C110.20414,289.000001 119.155934,280.03931 119.155934,268.99085 L119.155934,35.0091513 C119.155934,23.9584022 128.102545,15 139.158926,15 L235.323659,15" fill="none" stroke-width="4.6" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          </g>
        </g>
      </svg>
    );
  }
}