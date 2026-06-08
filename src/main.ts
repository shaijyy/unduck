import { bangs } from "./bang";
import "./global.css";

function noSearchDefaultPageRender() {
  if (!localStorage.getItem("default-bang")) {
    localStorage.setItem("default-bang", "g");
  } else {
    console.log(localStorage.getItem("default-bang"));
  }
  const app = document.querySelector<HTMLDivElement>("#app")!;
  const instanceDomain = `${window.location.protocol}//${window.location.hostname}`; // Get the full domain with protocol (https://www.example.com)
  app.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh;">
      <div class="content-container">
      <svg width="auto" height="120" viewBox="0 0 596 156" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path transform="translate(0, 0)" d="M9.030 35.105L9.030 35.105Q7.035 35.105 5.093 34.825Q3.150 34.545 1.715 33.880L1.715 33.880Q1.715 32.375 1.943 30.852Q2.170 29.330 2.625 27.790L2.625 27.790Q2.730 27.790 2.835 27.772Q2.940 27.755 3.080 27.755L3.080 27.755Q3.710 27.755 4.165 27.965L4.165 27.965L4.725 32.620Q5.390 32.760 6.353 32.953Q7.315 33.145 8.505 33.145L8.505 33.145Q9.765 33.145 11.095 32.830Q12.425 32.515 13.335 31.692Q14.245 30.870 14.245 29.330L14.245 29.330Q14.245 28.420 14.053 27.685Q13.860 26.950 13.195 26.250Q12.530 25.550 11.165 24.762Q9.800 23.975 7.455 22.960L7.455 22.960Q4.935 21.840 3.728 20.720Q2.520 19.600 2.170 18.357Q1.820 17.115 1.820 15.680L1.820 15.680Q1.820 13.475 3.098 12.092Q4.375 10.710 6.440 10.045Q8.505 9.380 10.815 9.380L10.815 9.380Q12.355 9.380 13.895 9.642Q15.435 9.905 16.765 10.430L16.765 10.430Q16.835 12.040 16.503 13.492Q16.170 14.945 15.680 16.345L15.680 16.345Q15.575 16.380 15.453 16.380Q15.330 16.380 15.225 16.380L15.225 16.380Q14.630 16.380 14.140 16.170L14.140 16.170L13.755 11.515Q13.020 11.305 12.215 11.182Q11.410 11.060 10.605 11.060L10.605 11.060Q9.240 11.060 7.980 11.462Q6.720 11.865 5.933 12.740Q5.145 13.615 5.145 15.085L5.145 15.085Q5.145 16.065 5.495 16.852Q5.845 17.640 6.913 18.392Q7.980 19.145 10.150 20.125L10.150 20.125Q12.880 21.315 14.595 22.365Q16.310 23.415 17.115 24.780Q17.920 26.145 17.920 28.350L17.920 28.350Q17.920 30.065 17.150 31.342Q16.380 32.620 15.085 33.442Q13.790 34.265 12.215 34.685Q10.640 35.105 9.030 35.105ZM25.515 8.365L25.515 18.865L25.690 18.865Q27.265 17.430 28.753 16.835Q30.240 16.240 31.430 16.240L31.430 16.240Q34.300 16.240 35.613 17.745Q36.925 19.250 36.925 21.700L36.925 21.700L36.925 32.690L39.445 33.390Q39.550 34.055 39.270 34.615L39.270 34.615Q38.325 34.545 37.240 34.492Q36.155 34.440 35.175 34.440L35.175 34.440Q34.195 34.440 33.040 34.492Q31.885 34.545 30.905 34.615L30.905 34.615Q30.800 33.950 30.975 33.390L30.975 33.390Q31.605 33.250 32.235 33.093Q32.865 32.935 33.425 32.690L33.425 32.690L33.425 22.225Q33.425 20.755 32.970 19.985Q32.515 19.215 31.745 18.952Q30.975 18.690 30.030 18.690L30.030 18.690Q28.910 18.690 27.703 19.250Q26.495 19.810 25.690 20.720L25.690 20.720L25.690 32.690L28.035 33.390Q28.140 34.055 27.860 34.615L27.860 34.615Q26.915 34.545 25.918 34.492Q24.920 34.440 23.940 34.440L23.940 34.440Q22.960 34.440 21.805 34.492Q20.650 34.545 19.670 34.615L19.670 34.615Q19.565 33.950 19.740 33.390L19.740 33.390Q20.405 33.215 21.053 33.075Q21.700 32.935 22.190 32.690L22.190 32.690L22.190 10.430L19.285 10.150Q19.180 9.450 19.460 8.925L19.460 8.925Q21.980 8.540 24.185 7.980L24.185 7.980Q24.535 8.015 24.850 8.102Q25.165 8.190 25.515 8.365L25.515 8.365ZM46.025 35.035L46.025 35.035Q43.925 35.035 42.490 33.932Q41.055 32.830 41.055 30.590L41.055 30.590Q41.055 28.840 41.913 27.720Q42.770 26.600 44.223 25.987Q45.675 25.375 47.460 25.165Q49.245 24.955 51.100 24.990L51.100 24.990L51.135 21.910Q51.170 19.950 50.400 18.882Q49.630 17.815 48.055 17.815L48.055 17.815Q47.180 17.815 46.375 17.937Q45.570 18.060 44.765 18.340L44.765 18.340L44.310 22.050Q44.030 22.190 43.540 22.207Q43.050 22.225 42.770 22.190L42.770 22.190Q42.455 21.035 42.245 19.880Q42.035 18.725 42.070 17.640L42.070 17.640Q43.715 16.870 45.378 16.555Q47.040 16.240 49.000 16.240L49.000 16.240Q50.960 16.240 52.168 16.870Q53.375 17.500 53.953 19.040Q54.530 20.580 54.530 23.345L54.530 23.345L54.530 32.725Q55.125 33.005 55.755 33.127Q56.385 33.250 56.980 33.425L56.980 33.425Q57.085 34.090 56.805 34.650L56.805 34.650Q56.245 34.755 55.458 34.825Q54.670 34.895 53.865 34.895L53.865 34.895Q52.710 34.895 51.870 34.685L51.870 34.685L51.380 32.865L51.240 32.865Q50.365 33.775 49.070 34.405Q47.775 35.035 46.025 35.035ZM47.355 33.110L47.355 33.110Q48.335 33.110 49.455 32.497Q50.575 31.885 51.100 31.115L51.100 31.115L51.100 26.390Q47.495 26.390 46.025 27.247Q44.555 28.105 44.555 30.240L44.555 30.240Q44.555 31.675 45.325 32.392Q46.095 33.110 47.355 33.110ZM64.505 16.975L64.505 32.690L66.850 33.390Q66.955 34.055 66.675 34.615L66.675 34.615Q65.730 34.545 64.733 34.492Q63.735 34.440 62.755 34.440L62.755 34.440Q61.775 34.440 60.620 34.492Q59.465 34.545 58.485 34.615L58.485 34.615Q58.380 33.950 58.555 33.390L58.555 33.390Q59.220 33.215 59.868 33.075Q60.515 32.935 61.005 32.690L61.005 32.690L61.005 19.040L58.100 18.760Q57.995 18.060 58.275 17.535L58.275 17.535Q59.535 17.360 60.813 17.115Q62.090 16.870 63.175 16.590L63.175 16.590Q63.525 16.625 63.840 16.712Q64.155 16.800 64.505 16.975L64.505 16.975ZM62.160 13.405L62.160 13.405Q61.565 13.405 61.075 13.020Q60.585 12.635 60.305 12.075Q60.025 11.515 60.025 11.025L60.025 11.025Q60.025 10.570 60.410 10.097Q60.795 9.625 61.373 9.292Q61.950 8.960 62.510 8.960L62.510 8.960Q63.140 8.960 63.630 9.362Q64.120 9.765 64.383 10.307Q64.645 10.850 64.645 11.340L64.645 11.340Q64.645 11.795 64.278 12.285Q63.910 12.775 63.333 13.090Q62.755 13.405 62.160 13.405ZM74.165 16.975L74.165 33.250Q74.165 36.680 72.328 39.008Q70.490 41.335 67.340 43.050L67.340 43.050Q66.605 42.525 66.675 41.545L66.675 41.545Q68.425 40.530 69.283 39.340Q70.140 38.150 70.403 36.697Q70.665 35.245 70.665 33.390L70.665 33.390L70.665 19.040L67.760 18.760Q67.655 18.060 67.935 17.535L67.935 17.535Q69.195 17.360 70.473 17.115Q71.750 16.870 72.835 16.590L72.835 16.590Q73.185 16.625 73.500 16.712Q73.815 16.800 74.165 16.975L74.165 16.975ZM72.065 13.405L72.065 13.405Q71.470 13.405 70.980 13.020Q70.490 12.635 70.210 12.075Q69.930 11.515 69.930 11.025L69.930 11.025Q69.930 10.570 70.315 10.097Q70.700 9.625 71.278 9.292Q71.855 8.960 72.415 8.960L72.415 8.960Q73.045 8.960 73.535 9.362Q74.025 9.765 74.288 10.307Q74.550 10.850 74.550 11.340L74.550 11.340Q74.550 11.795 74.183 12.285Q73.815 12.775 73.238 13.090Q72.660 13.405 72.065 13.405ZM80.500 43.855L80.500 43.855Q79.905 42.945 79.293 41.755Q78.680 40.565 78.505 39.375L78.505 39.375Q78.715 39.200 79.118 39.042Q79.520 38.885 79.835 38.885L79.835 38.885L82.075 41.510Q83.020 40.600 84.018 38.762Q85.015 36.925 85.890 34.580L85.890 34.580L79.520 18.690L76.825 17.990Q76.720 17.325 77.000 16.765L77.000 16.765Q77.945 16.800 79.048 16.870Q80.150 16.940 81.130 16.940L81.130 16.940Q82.145 16.940 83.318 16.870Q84.490 16.800 85.470 16.765L85.470 16.765Q85.575 17.430 85.400 17.990L85.400 17.990Q84.770 18.130 84.158 18.270Q83.545 18.410 82.985 18.690L82.985 18.690L85.890 25.725Q86.065 26.145 86.415 27.002Q86.765 27.860 87.115 28.945Q87.465 30.030 87.675 31.150L87.675 31.150L87.780 31.150Q87.990 30.345 88.235 29.277Q88.480 28.210 89.145 26.495L89.145 26.495L92.120 18.690L89.705 17.990Q89.600 17.325 89.880 16.765L89.880 16.765Q90.825 16.800 91.578 16.870Q92.330 16.940 93.310 16.940L93.310 16.940Q94.325 16.940 95.025 16.870Q95.725 16.800 96.705 16.765L96.705 16.765Q96.810 17.430 96.635 17.990L96.635 17.990Q96.005 18.130 95.358 18.270Q94.710 18.410 94.220 18.690L94.220 18.690L87.360 36.085Q86.450 38.395 85.330 40.145Q84.210 41.895 82.985 42.875Q81.760 43.855 80.500 43.855ZM100.555 43.855L100.555 43.855Q99.960 42.945 99.348 41.755Q98.735 40.565 98.560 39.375L98.560 39.375Q98.770 39.200 99.173 39.042Q99.575 38.885 99.890 38.885L99.890 38.885L102.130 41.510Q103.075 40.600 104.073 38.762Q105.070 36.925 105.945 34.580L105.945 34.580L99.575 18.690L96.880 17.990Q96.775 17.325 97.055 16.765L97.055 16.765Q98.000 16.800 99.103 16.870Q100.205 16.940 101.185 16.940L101.185 16.940Q102.200 16.940 103.373 16.870Q104.545 16.800 105.525 16.765L105.525 16.765Q105.630 17.430 105.455 17.990L105.455 17.990Q104.825 18.130 104.213 18.270Q103.600 18.410 103.040 18.690L103.040 18.690L105.945 25.725Q106.120 26.145 106.470 27.002Q106.820 27.860 107.170 28.945Q107.520 30.030 107.730 31.150L107.730 31.150L107.835 31.150Q108.045 30.345 108.290 29.277Q108.535 28.210 109.200 26.495L109.200 26.495L112.175 18.690L109.760 17.990Q109.655 17.325 109.935 16.765L109.935 16.765Q110.880 16.800 111.633 16.870Q112.385 16.940 113.365 16.940L113.365 16.940Q114.380 16.940 115.080 16.870Q115.780 16.800 116.760 16.765L116.760 16.765Q116.865 17.430 116.690 17.990L116.690 17.990Q116.060 18.130 115.413 18.270Q114.765 18.410 114.275 18.690L114.275 18.690L107.415 36.085Q106.505 38.395 105.385 40.145Q104.265 41.895 103.040 42.875Q101.815 43.855 100.555 43.855ZM121.835 9.695L120.750 19.110Q119.980 19.390 119.350 19.110L119.350 19.110L118.335 9.695Q118.510 9.450 119.070 9.275Q119.630 9.100 120.085 9.100L120.085 9.100Q120.575 9.100 121.135 9.257Q121.695 9.415 121.835 9.695L121.835 9.695ZM126.875 29.190L127.225 32.900Q127.960 33.250 128.713 33.390Q129.465 33.530 130.410 33.530L130.410 33.530Q131.845 33.530 132.965 32.900Q134.085 32.270 134.085 30.870L134.085 30.870Q134.085 30.135 133.683 29.505Q133.280 28.875 132.283 28.210Q131.285 27.545 129.430 26.705L129.430 26.705Q127.400 25.760 126.280 24.517Q125.160 23.275 125.160 21.070L125.160 21.070Q125.160 19.285 126.053 18.252Q126.945 17.220 128.363 16.765Q129.780 16.310 131.355 16.310L131.355 16.310Q132.720 16.310 134.068 16.572Q135.415 16.835 136.465 17.290L136.465 17.290Q136.465 17.465 136.483 17.675Q136.500 17.885 136.500 18.060L136.500 18.060Q136.500 20.195 135.835 22.085L135.835 22.085Q135.695 22.120 135.573 22.137Q135.450 22.155 135.310 22.155L135.310 22.155Q134.785 22.155 134.260 21.945L134.260 21.945L133.700 18.165Q133.245 18.025 132.650 17.937Q132.055 17.850 131.460 17.850L131.460 17.850Q130.655 17.850 129.868 18.077Q129.080 18.305 128.573 18.847Q128.065 19.390 128.065 20.370L128.065 20.370Q128.065 21.035 128.363 21.630Q128.660 22.225 129.553 22.872Q130.445 23.520 132.230 24.395L132.230 24.395Q135.030 25.725 136.168 26.967Q137.305 28.210 137.305 30.065L137.305 30.065Q137.305 31.850 136.360 32.970Q135.415 34.090 133.893 34.615Q132.370 35.140 130.655 35.140L130.655 35.140Q129.010 35.140 127.593 34.877Q126.175 34.615 124.740 33.740L124.740 33.740L124.740 33.145Q124.740 32.200 124.863 31.202Q124.985 30.205 125.370 29.050L125.370 29.050Q125.580 29.015 125.720 29.015L125.720 29.015Q126.350 29.015 126.875 29.190L126.875 29.190Z" stroke="black" stroke-width="2" stroke-linecap="round" />
      <path transform="translate(0, 50)" d="M26.4545 0.909088L24.0909 64.9091H3.36364L1 0.909088H26.4545ZM13.7273 95.4545C10.2121 95.4545 7.19697 94.2273 4.68182 91.7727C2.19697 89.2879 0.969697 86.2727 1 82.7273C0.969697 79.2727 2.19697 76.3182 4.68182 73.8636C7.19697 71.4091 10.2121 70.1818 13.7273 70.1818C17.0606 70.1818 20 71.4091 22.5455 73.8636C25.1212 76.3182 26.4242 79.2727 26.4545 82.7273C26.4242 85.0909 25.803 87.2424 24.5909 89.1818C23.4091 91.0909 21.8636 92.6212 19.9545 93.7727C18.0455 94.8939 15.9697 95.4545 13.7273 95.4545ZM97.5909 0.909088H122.864V60.5455C122.864 67.6364 121.167 73.7727 117.773 78.9545C114.409 84.1061 109.712 88.0909 103.682 90.9091C97.6515 93.697 90.6515 95.0909 82.6818 95.0909C74.6515 95.0909 67.6212 93.697 61.5909 90.9091C55.5606 88.0909 50.8636 84.1061 47.5 78.9545C44.1667 73.7727 42.5 67.6364 42.5 60.5455V0.909088H67.7727V58.3636C67.7727 61.2424 68.4091 63.8182 69.6818 66.0909C70.9545 68.3333 72.7121 70.0909 74.9545 71.3636C77.2273 72.6364 79.803 73.2727 82.6818 73.2727C85.5909 73.2727 88.1667 72.6364 90.4091 71.3636C92.6515 70.0909 94.4091 68.3333 95.6818 66.0909C96.9545 63.8182 97.5909 61.2424 97.5909 58.3636V0.909088ZM160.33 54.7273V94H135.239V24.1818H159.057V37.4545H159.784C161.299 33.0303 163.966 29.5606 167.784 27.0455C171.633 24.5303 176.117 23.2727 181.239 23.2727C186.178 23.2727 190.466 24.4091 194.102 26.6818C197.769 28.9242 200.602 32.0151 202.602 35.9545C204.633 39.8939 205.633 44.3939 205.602 49.4545V94H180.511V54.7273C180.542 51.2727 179.663 48.5606 177.875 46.5909C176.117 44.6212 173.663 43.6364 170.511 43.6364C168.451 43.6364 166.648 44.0909 165.102 45C163.587 45.8788 162.42 47.1515 161.602 48.8182C160.784 50.4545 160.36 52.4242 160.33 54.7273ZM243.261 94.9091C238.292 94.9091 233.716 93.6061 229.534 91C225.383 88.3939 222.049 84.4394 219.534 79.1364C217.049 73.8333 215.807 67.1515 215.807 59.0909C215.807 50.6667 217.11 43.8182 219.716 38.5455C222.352 33.2727 225.746 29.4091 229.898 26.9545C234.08 24.5 238.473 23.2727 243.08 23.2727C246.534 23.2727 249.564 23.8788 252.17 25.0909C254.777 26.2727 256.958 27.8636 258.716 29.8636C260.473 31.8333 261.807 34 262.716 36.3636H263.08V0.909088H288.17V94H263.261V82.5455H262.716C261.746 84.9091 260.352 87.0303 258.534 88.9091C256.746 90.7576 254.564 92.2273 251.989 93.3182C249.443 94.3788 246.534 94.9091 243.261 94.9091ZM252.534 75.6364C254.837 75.6364 256.807 74.9697 258.443 73.6364C260.11 72.2727 261.383 70.3636 262.261 67.9091C263.17 65.4242 263.625 62.4848 263.625 59.0909C263.625 55.6364 263.17 52.6818 262.261 50.2273C261.383 47.7424 260.11 45.8485 258.443 44.5455C256.807 43.2121 254.837 42.5455 252.534 42.5455C250.231 42.5455 248.261 43.2121 246.625 44.5455C245.019 45.8485 243.777 47.7424 242.898 50.2273C242.049 52.6818 241.625 55.6364 241.625 59.0909C241.625 62.5455 242.049 65.5152 242.898 68C243.777 70.4545 245.019 72.3485 246.625 73.6818C248.261 74.9848 250.231 75.6364 252.534 75.6364ZM345.761 63.4545V24.1818H370.852V94H347.034V80.7273H346.307C344.792 85.1818 342.14 88.6667 338.352 91.1818C334.564 93.6667 330.064 94.9091 324.852 94.9091C319.973 94.9091 315.701 93.7879 312.034 91.5455C308.398 89.303 305.564 86.2121 303.534 82.2727C301.534 78.3333 300.519 73.8182 300.489 68.7273V24.1818H325.58V63.4545C325.61 66.9091 326.489 69.6212 328.216 71.5909C329.973 73.5606 332.428 74.5455 335.58 74.5455C337.67 74.5455 339.473 74.1061 340.989 73.2273C342.534 72.3182 343.716 71.0455 344.534 69.4091C345.383 67.7424 345.792 65.7576 345.761 63.4545ZM417.25 95.2727C409.674 95.2727 403.189 93.7727 397.795 90.7727C392.402 87.7424 388.265 83.5303 385.386 78.1364C382.508 72.7121 381.068 66.4242 381.068 59.2727C381.068 52.1212 382.508 45.8485 385.386 40.4545C388.265 35.0303 392.402 30.8182 397.795 27.8182C403.189 24.7879 409.674 23.2727 417.25 23.2727C424.098 23.2727 430.023 24.5152 435.023 27C440.053 29.4545 443.947 32.9394 446.705 37.4545C449.462 41.9394 450.856 47.2121 450.886 53.2727H427.614C427.28 49.6061 426.22 46.8182 424.432 44.9091C422.674 42.9697 420.402 42 417.614 42C415.432 42 413.523 42.6364 411.886 43.9091C410.25 45.1515 408.977 47.0455 408.068 49.5909C407.159 52.1061 406.705 55.2727 406.705 59.0909C406.705 62.9091 407.159 66.0909 408.068 68.6364C408.977 71.1515 410.25 73.0455 411.886 74.3182C413.523 75.5606 415.432 76.1818 417.614 76.1818C419.462 76.1818 421.098 75.7576 422.523 74.9091C423.947 74.0303 425.098 72.7576 425.977 71.0909C426.886 69.3939 427.432 67.3333 427.614 64.9091H450.886C450.795 71.0606 449.386 76.4242 446.659 81C443.932 85.5455 440.068 89.0606 435.068 91.5455C430.098 94.0303 424.159 95.2727 417.25 95.2727ZM483.784 77.4545L483.966 47.6364H487.239L504.148 24.1818H532.33L503.966 60.7273H496.875L483.784 77.4545ZM461.239 94V0.909088H486.33V94H461.239ZM504.33 94L488.33 66.3636L504.693 48.5455L533.057 94H504.33ZM552.5 95.4545C548.985 95.4545 545.97 94.2273 543.455 91.7727C540.97 89.2879 539.742 86.2727 539.773 82.7273C539.742 79.2727 540.97 76.3182 543.455 73.8636C545.97 71.4091 548.985 70.1818 552.5 70.1818C555.833 70.1818 558.773 71.4091 561.318 73.8636C563.894 76.3182 565.197 79.2727 565.227 82.7273C565.197 85.0909 564.576 87.2424 563.364 89.1818C562.182 91.0909 560.636 92.6212 558.727 93.7727C556.818 94.8939 554.742 95.4545 552.5 95.4545Z" stroke="black" stroke-width="2" stroke-linecap="round"/>
      </svg>
        <h3>It's <a href="https://duckduckgo.com/bang.html" target="_blank">DuckDuckGo's Bangs</a>, Done better.</h2>
        <p>DuckDuckGo's bang redirects are too slow. We fix that.</p><p>Add the following URL as a custom search engine to your browser. Enables <a href="https://duckduckgo.com/bang.html" target="_blank">all of DuckDuckGo's bangs</a> and even a few more.</p>
        <div class="url-container">
          <input
            type="text"
            class="url-input"
            value="${instanceDomain}?q=%s"
            readonly
          />
          <button class="copy-button">
            <img src="/clipboard.svg" alt="Copy" />
          </button>
        </div>
        <p style="margin-top: 25px;">When search queries are being sent but no Bangs were used, We will use a default bang. You can always change the default bang by clicking on the button in the footer.</p>
        <h2 class="error hidden">Bang not found.</h2>
        <div class="bang-container hidden">
          <input
            type="text"
            class="bang-input"
            placeholder="e.g., !g for Google, !? for DuckDuckGo."
          />
          <button class="save-button">
            <img src="/floppy.svg" alt="Save" />
          </button>
        </div>
        <p class="current-bang">Current Default Bang: ! LOADING... </p>
      </div>
      <footer class="footer">
        <a href="https://github.com/shaijyy" target="_blank">shaijyy</a>
        •
        <a href="https://github.com/shaijyy/unduck" target="_blank">source code</a>
        •
        <a href="#" onClick="changeDefaultBang()" class="bang-toggle">change default !bang</a>
      </footer>
    </div>
  `;

  const copyButton = app.querySelector<HTMLButtonElement>(".copy-button")!;
  const copyIcon = copyButton.querySelector("img")!;
  const urlInput = app.querySelector<HTMLInputElement>(".url-input")!;

  copyButton.addEventListener("click", async () => {
    await navigator.clipboard.writeText(urlInput.value);
    copyIcon.src = "/clipboard-check.svg";

    setTimeout(() => {
      copyIcon.src = "/clipboard.svg";
    }, 2000);
  });

  const saveButton = app.querySelector<HTMLButtonElement>(".save-button")!;
  const saveIcon = saveButton.querySelector("img")!;
  const bangInput = app.querySelector<HTMLInputElement>(".bang-input")!;
  const bangContainer = app.querySelector<HTMLDivElement>(".bang-container")!;
  const bangToggle = app.querySelector<HTMLAnchorElement>(".bang-toggle")!;
  const currentBang = app.querySelector<HTMLParagraphElement>(".current-bang")!;
  const bangError = app.querySelector<HTMLHeadingElement>(".error")!;

  const findBang = (bangt: string): string | undefined => {
    const foundBang = bangs.find((bang) => bang.t === bangt);
    return foundBang ? foundBang.s : undefined;
  };

  if (!localStorage.getItem("default-bang")) {
    localStorage.setItem("default-bang", "g"); // Default to Google if not set
  }

  const bangt = localStorage.getItem("default-bang");
  currentBang.innerHTML = `Current Default Bang: !${bangt} (${findBang(String(bangt))})`;

  const saveInputValue = () => {
    const inputValue = bangInput.value;
    const transformedValue = inputValue.replace(/^!?(.*)$/, (match, chars) => {
      return match.charAt(0) === "!" ? chars : chars.toLowerCase();
    });

    if (findBang(transformedValue)) {
      localStorage.setItem("default-bang", transformedValue);
      const bangt = localStorage.getItem("default-bang") || "g";
      currentBang.innerHTML = `Current Default Bang: !${bangt} (${findBang(bangt)})`;

      saveIcon.src = "/floppy-check.svg";

      setTimeout(() => {
        saveIcon.src = "/floppy.svg";
      }, 2000);
    } else {
      bangError.classList.remove("hidden");
      setTimeout(() => {
        bangError.classList.add("hidden");
      }, 2000);
    }
  };

  saveButton.addEventListener("click", saveInputValue);

  bangInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      saveInputValue();
      const bangt = localStorage.getItem("default-bang") || "g";
      currentBang.innerHTML = `Current Default Bang: !${bangt} (${findBang(bangt)})`;
      event.preventDefault();
    }
  });

  bangToggle.addEventListener("click", (event) => {
    if (bangContainer) {
      event.preventDefault();
      const bangt = localStorage.getItem("default-bang") || "g";
      currentBang.innerHTML = `Current Default Bang: !${bangt} (${findBang(bangt)})`;
      bangContainer.classList.toggle("hidden");
    }
  });
}

const bangToHomepage = (bangt: string) => {
  const foundBang = bangs.find((bang) => bang.t === bangt);
  return foundBang ? foundBang.d : undefined;
};

function getBangredirectUrl() {
  const url = new URL(window.location.href);
  const originalQuery = url.searchParams.get("q")?.trim() ?? "";

  if (!originalQuery) {
    noSearchDefaultPageRender();
    return null;
  }

  // I AM SHUTTING DOWN QUACKY SINCE IT COSTS A LOT AND NO ONE USES IT (INCLUDING ME...)
  //
  // // Check for "feeling ducky" feature
  // if (originalQuery.endsWith(" !")) {
  //   const searchQuery = originalQuery.slice(0, -2).trim();
  //   if (searchQuery) {
  //     return `https://quacky-gamma.vercel.app/${encodeURIComponent(searchQuery)}`;
  //   }
  //   // If originalQuery was just " !" or "  !", let it fall through
  // } else if (originalQuery.startsWith("! ")) {
  //   // Added condition for "! query"
  //   const searchQuery = originalQuery.slice(2).trim();
  //   if (searchQuery) {
  //     return `https://quacky-gamma.vercel.app/${encodeURIComponent(searchQuery)}`;
  //   }
  //   // If originalQuery was just "! " or "!  ", let it fall through
  // }

  const defaultBangTicker = localStorage.getItem("default-bang")!;

  // Regex to capture: 1=bang, 2=rest of query (optional)
  const bangRegex = /^!(\S+)(?:\s+(.*))?$/i;
  const match = originalQuery.match(bangRegex);

  let bangToUseTicker: string | undefined;
  let queryForSearchEngine = originalQuery;

  if (match) {
    const typedBang = match[1].toLowerCase();
    const queryAfterBang = match[2]?.trim() ?? "";

    if (typedBang === "no") {
      bangToUseTicker = defaultBangTicker;
      queryForSearchEngine = queryAfterBang; // If just "!no", this will be ""
    } else {
      const foundTypedBang = bangs.find((b) => b.t === typedBang);
      if (foundTypedBang) {
        bangToUseTicker = typedBang;
        queryForSearchEngine = queryAfterBang;
      } else {
        // Invalid bang typed, use default bang with the original full query
        bangToUseTicker = defaultBangTicker;
        queryForSearchEngine = originalQuery;
      }
    }
  } else {
    // No bang pattern typed, use default bang
    bangToUseTicker = defaultBangTicker;
    queryForSearchEngine = originalQuery;
  }

  const selectedBangObject = bangs.find((b) => b.t === bangToUseTicker);

  if (!selectedBangObject) {
    // Fallback to Google if the determined bang ticker is somehow not found (e.g., corrupted storage or bangs.ts)
    console.error(
      `Could not find bang object for ticker: ${bangToUseTicker}. Defaulting to Google with original query.`,
    );
    return `https://www.google.com/search?q=${encodeURIComponent(originalQuery)}`;
  }

  if (queryForSearchEngine === "") {
    // No actual search term (e.g., user typed "!yt" or "!no", or default bang resolved to empty query)
    // Redirect to the homepage of the selected bang
    const homepageDomain = bangToHomepage(selectedBangObject.t);
    if (homepageDomain) {
      return `https://${homepageDomain}/`;
    } else {
      // Fallback if homepage isn't defined (shouldn't happen for valid bangs in bangs.ts)
      console.error(
        `No homepage for bang ${selectedBangObject.t}. Defaulting to Google search for a space.`,
      );
      // As a last resort, search for the bang ticker itself on Google, or a space if ticker is problematic
      return `https://www.google.com/search?q=${encodeURIComponent(selectedBangObject.t || " ")}`;
    }
  } else {
    if (queryForSearchEngine === "_NEWDEF") {
      if (localStorage.getItem("default-bang") != selectedBangObject.t) {
        localStorage.setItem("default-bang", selectedBangObject.t);
      }
      const html = `
        <!DOCTYPE html>
        <html>
        <head>
        <meta charset="utf-8">
        <title>Bang Set</title>
        <style>
        body {
            font-family: sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            text-align: center;
        }

        h1 {
            font-size: 4rem;
            margin-bottom: 20px;
        }

        p {
            font-size: 1.5rem;
            color: #333;
        }
        </style>
        </head>
        <body>
            <h1>New Default Bang Set: !${selectedBangObject.t}</h1>

            <p id="countdown">Closing in 5...</p>

            <script>
                let seconds = 5;
                const el = document.getElementById("countdown");

                const timer = setInterval(() => {
                    seconds--;
                    if (seconds > 0) {
                        el.textContent = "Closing in " + String(seconds) + "...";
                    } else {
                        clearInterval(timer);
                        window.location.href = "https://${window.location.hostname}";
                    }
                }, 1000);
            </script>
        </body>
        </html>
      `;

      const blob = new Blob([html], { type: "text/html" });
      const bloburl = URL.createObjectURL(blob);
      return bloburl;
    }

    // We have a bang and a query for it
    return selectedBangObject.u.replace(
      "{{{s}}}",
      encodeURIComponent(queryForSearchEngine).replace(/%2F/g, "/"),
    );
  }
}

function doRedirect() {
  const searchUrl = getBangredirectUrl();
  console.log(searchUrl);
  if (!searchUrl) {
    noSearchDefaultPageRender();
    return null;
  } else {
    window.location.replace(searchUrl);
  }
}

doRedirect();
