import React, { FC } from "react";
import { IconProps } from "../types";
import { useTheme } from "../ThemeProvider";

const GenderBoth: FC<IconProps> = ({ size, color, ...props }) => {
  const theme = useTheme();

  const colorStyle = color || theme.color || "#292D32";
  const sizeStyle = size || theme.size || 24;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeStyle}
      height={sizeStyle}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M5.94448 10.416C5.94281 9.98693 5.94248 9.58958 5.94272 9.26135C6.00183 9.26959 6.06024 9.27333 6.11683 9.27315C6.60737 9.27164 7.23593 8.94919 7.31298 8.22306L7.31299 8.22301C7.40757 7.33093 7.28805 6.27909 6.85442 5.40799C6.51549 4.72714 5.9709 4.13941 5.19203 3.86177C5.37379 3.69068 5.51816 3.48232 5.61453 3.24967C5.74861 2.92598 5.78376 2.56974 5.71538 2.226C5.64702 1.88234 5.47831 1.56664 5.23051 1.31884C4.9827 1.07102 4.66694 0.902302 4.32329 0.833947C3.97961 0.765584 3.62337 0.800668 3.29963 0.934768C2.97589 1.06887 2.69917 1.29595 2.50449 1.58732L3.00337 1.92066L2.50449 1.58732C2.30979 1.8787 2.2059 2.22125 2.2059 2.57165C2.2059 2.80428 2.2517 3.03468 2.34076 3.24967C2.42981 3.46466 2.56034 3.65997 2.72484 3.82447C2.74083 3.84047 2.75712 3.85614 2.77369 3.87149C1.98617 4.16177 1.4444 4.76958 1.11261 5.46254C0.701023 6.32217 0.587663 7.34866 0.68031 8.22346L0.680344 8.22378C0.757598 8.94953 1.38562 9.27239 1.87646 9.27397C1.93181 9.27414 1.98887 9.27058 2.04664 9.26272C2.04473 9.59021 2.0419 9.98597 2.03775 10.4132C2.0267 11.551 2.00634 12.9022 1.96936 13.7819C1.95372 14.154 2.09494 14.4805 2.3509 14.704C2.5919 14.9144 2.89467 15 3.16983 14.9997C3.44031 14.9994 3.74496 14.9075 3.98578 14.7149C4.09697 14.8081 4.22403 14.8808 4.36102 14.9293L4.5615 14.3638L4.36103 14.9293C4.50102 14.979 4.64879 15.0025 4.79712 14.999C4.94913 15.0051 5.10109 14.9813 5.24416 14.9286L5.03678 14.3656L5.24416 14.9286C5.39982 14.8712 5.54112 14.7812 5.65871 14.6647L5.2364 14.2384L5.65872 14.6646C5.77629 14.5481 5.8677 14.4076 5.92647 14.2525L5.37313 14.0429L5.92648 14.2525C5.98422 14.1 6.00903 13.9372 5.99951 13.7748C5.96267 12.8969 5.94889 11.5511 5.94448 10.416Z"
        stroke={colorStyle}
        stroke-width="1.2"
      />
      <mask
        id="path-2-outside-1_4101_1084"
        maskUnits="userSpaceOnUse"
        x="7.24316"
        y="-0.600098"
        width="9"
        height="17"
        fill="black"
      >
        <rect fill="white" x="7.24316" y="-0.600098" width="9" height="17" />
        <path d="M12.0869 11.7993C12.0983 12.4686 12.1161 13.1378 12.144 13.8066C12.1473 13.8885 12.1668 13.9688 12.2014 14.0431C12.2361 14.1173 12.2852 14.1839 12.3458 14.2389C12.4065 14.294 12.4775 14.3364 12.5547 14.3638C12.6319 14.3912 12.7137 14.4029 12.7955 14.3983C12.8751 14.4043 12.9551 14.3931 13.0299 14.3656C13.1048 14.338 13.1729 14.2946 13.2296 14.2384C13.2863 14.1823 13.3303 14.1146 13.3585 14.0399C13.3868 13.9653 13.3987 13.8855 13.3935 13.8058C13.3652 13.137 13.3472 12.4682 13.3357 11.7993H13.7414C13.9036 11.7993 14.0262 11.6524 13.9971 11.4928L13.2891 7.59868C13.2877 7.51074 13.2907 7.68662 13.2891 7.59868C13.2812 7.1486 13.2688 6.43471 13.2741 5.98498C13.6467 6.60375 13.6807 7.54801 13.616 8.15975C13.5427 8.84767 14.6372 8.84091 14.7095 8.15975C14.88 6.55123 14.2613 4.43054 12.3502 4.29795L11.5133 4.30809C9.69415 4.51737 9.10323 6.58425 9.27014 8.16027C9.34267 8.84169 10.4369 8.84871 10.3636 8.16027C10.2742 7.46215 10.3695 6.75279 10.6399 6.10302V7.69178L9.94885 11.4928C9.91983 11.6524 10.0424 11.7993 10.2046 11.7993H10.6196C10.6081 12.4686 10.5901 13.1378 10.562 13.8071C10.5287 14.5988 11.7792 14.5957 11.8122 13.8071C11.8409 13.138 11.8592 12.4687 11.8708 11.7993H12.0869Z" />
        <path d="M10.9965 1.92066C10.8678 2.11336 10.7991 2.3399 10.7991 2.57165C10.7991 2.72553 10.8294 2.8779 10.8882 3.02006C10.9471 3.16223 11.0335 3.2914 11.1423 3.4002C11.2511 3.50901 11.3802 3.59532 11.5224 3.65421C11.6646 3.71309 11.817 3.7434 11.9708 3.7434C12.2026 3.7434 12.4291 3.67468 12.6218 3.54593C12.8145 3.41717 12.9647 3.23417 13.0534 3.02006C13.1421 2.80595 13.1653 2.57035 13.1201 2.34305C13.0749 2.11576 12.9633 1.90697 12.7994 1.7431C12.6355 1.57923 12.4267 1.46763 12.1994 1.42242C11.9721 1.37721 11.7365 1.40041 11.5224 1.4891C11.3083 1.57778 11.1253 1.72797 10.9965 1.92066Z" />
      </mask>
      <path
        d="M12.144 13.8066L13.343 13.7585L13.3429 13.7566L12.144 13.8066ZM12.0869 11.7993L13.2867 11.7789L13.2666 10.5993H12.0869V11.7993ZM12.2014 14.0431L11.1141 14.5507L11.1141 14.5507L12.2014 14.0431ZM12.3458 14.2389L11.539 15.1272L11.5391 15.1272L12.3458 14.2389ZM12.5547 14.3638L12.1537 15.4949L12.1537 15.4949L12.5547 14.3638ZM12.7955 14.3983L12.8854 13.2017L12.8069 13.1958L12.7283 13.2002L12.7955 14.3983ZM13.0299 14.3656L12.6152 13.2395H12.6152L13.0299 14.3656ZM13.2296 14.2384L14.0742 15.0909L14.0742 15.0909L13.2296 14.2384ZM13.3585 14.0399L14.4807 14.465L14.4807 14.465L13.3585 14.0399ZM13.3935 13.8058L12.1945 13.8564L12.1951 13.8706L12.1961 13.8848L13.3935 13.8058ZM13.3357 11.7993V10.5993H12.1149L12.1359 11.8199L13.3357 11.7993ZM13.9971 11.4928L12.8165 11.7074L12.8165 11.7074L13.9971 11.4928ZM13.2891 7.59868L12.0893 7.6197L12.0893 7.6197L13.2891 7.59868ZM13.2741 5.98498L14.3022 5.366L12.1239 1.74821L12.0742 5.97087L13.2741 5.98498ZM13.616 8.15975L14.8092 8.28692L14.8093 8.28603L13.616 8.15975ZM14.7095 8.15975L15.9028 8.28637L15.9028 8.28628L14.7095 8.15975ZM12.3502 4.29795L12.4332 3.10082L12.3845 3.09744L12.3356 3.09803L12.3502 4.29795ZM11.5133 4.30809L11.4987 3.10817L11.4372 3.10892L11.3761 3.11595L11.5133 4.30809ZM9.27014 8.16027L8.07681 8.28665L8.07688 8.28729L9.27014 8.16027ZM10.3636 8.16027L11.5568 8.0332L11.5555 8.0205L11.5539 8.00783L10.3636 8.16027ZM10.6399 6.10302H11.8399L9.53209 5.64185L10.6399 6.10302ZM10.6399 7.69178L11.8206 7.90644L11.8399 7.79998V7.69178H10.6399ZM9.94885 11.4928L11.1295 11.7074L11.1295 11.7074L9.94885 11.4928ZM10.6196 11.7993L11.8195 11.8199L11.8404 10.5993H10.6196V11.7993ZM10.562 13.8071L9.36306 13.7567L9.36306 13.7567L10.562 13.8071ZM11.8122 13.8071L10.6133 13.7558L10.6133 13.7569L11.8122 13.8071ZM11.8708 11.7993V10.5993H10.6915L10.671 11.7784L11.8708 11.7993ZM11.5224 3.65421L11.9816 2.54555L11.9816 2.54555L11.5224 3.65421ZM12.6218 3.54593L11.9551 2.54816L11.9551 2.54816L12.6218 3.54593ZM13.0534 3.02006L11.9447 2.56084L11.9447 2.56084L13.0534 3.02006ZM13.1201 2.34305L11.9431 2.57716L11.9431 2.57716L13.1201 2.34305ZM12.7994 1.7431L11.9509 2.59163L11.9509 2.59163L12.7994 1.7431ZM12.1994 1.42242L11.9653 2.59936L11.9653 2.59936L12.1994 1.42242ZM11.5224 1.4891L11.0632 0.38044L11.0632 0.380441L11.5224 1.4891ZM13.3429 13.7566C13.3155 13.0997 13.298 12.4406 13.2867 11.7789L10.887 11.8197C10.8986 12.4966 10.9166 13.1759 10.945 13.8567L13.3429 13.7566ZM13.2888 13.5354C13.3216 13.6057 13.3399 13.6816 13.343 13.7585L10.945 13.8548C10.9546 14.0953 11.012 14.3319 11.1141 14.5507L13.2888 13.5354ZM13.1526 13.3506C13.2096 13.4023 13.2559 13.4651 13.2888 13.5354L11.1141 14.5507C11.2162 14.7695 11.3608 14.9654 11.539 15.1272L13.1526 13.3506ZM12.9556 13.2328C13.0284 13.2586 13.0954 13.2987 13.1526 13.3506L11.5391 15.1272C11.7175 15.2893 11.9265 15.4143 12.1537 15.4949L12.9556 13.2328ZM12.7283 13.2002C12.8055 13.1959 12.8828 13.207 12.9556 13.2328L12.1537 15.4949C12.3809 15.5754 12.6218 15.61 12.8626 15.5965L12.7283 13.2002ZM12.6152 13.2395C12.7016 13.2077 12.7937 13.1948 12.8854 13.2017L12.7056 15.595C12.9564 15.6138 13.2085 15.5786 13.4447 15.4916L12.6152 13.2395ZM12.3849 13.386C12.4501 13.3215 12.5285 13.2714 12.6152 13.2395L13.4447 15.4916C13.6811 15.4045 13.8957 15.2677 14.0742 15.0909L12.3849 13.386ZM12.2363 13.6149C12.2691 13.5285 12.3199 13.4505 12.3849 13.386L14.0742 15.0909C14.2526 14.914 14.3915 14.7007 14.4807 14.465L12.2363 13.6149ZM12.1961 13.8848C12.19 13.7932 12.2037 13.7011 12.2363 13.6149L14.4807 14.465C14.57 14.2295 14.6074 13.9777 14.5909 13.7269L12.1961 13.8848ZM12.1359 11.8199C12.1475 12.4965 12.1658 13.1756 12.1945 13.8564L14.5924 13.7553C14.5647 13.0985 14.5469 12.4399 14.5355 11.7786L12.1359 11.8199ZM13.7414 10.5993H13.3357V12.9993H13.7414V10.5993ZM12.8165 11.7074C12.7116 11.1304 13.1549 10.5993 13.7414 10.5993V12.9993C14.6522 12.9993 15.3407 12.1743 15.1778 11.2781L12.8165 11.7074ZM12.1085 7.81334L12.8165 11.7074L15.1778 11.2781L14.4698 7.38402L12.1085 7.81334ZM12.0893 7.6197C12.0895 7.6307 12.0896 7.63792 12.0897 7.64214C12.0897 7.64321 12.0897 7.64423 12.0898 7.64515C12.0898 7.64577 12.0898 7.64734 12.0898 7.64903C12.0899 7.64952 12.0899 7.65039 12.0899 7.65147C12.0899 7.65206 12.09 7.65477 12.0901 7.6582C12.0901 7.65913 12.0902 7.66126 12.0902 7.66247C12.0903 7.66413 12.0904 7.6682 12.0905 7.6706C12.0906 7.67443 12.0911 7.68525 12.0915 7.69223C12.0926 7.7092 12.1064 7.82446 12.127 7.92139C13.3554 8.82226 14.4846 7.73378 14.4885 7.67506C14.489 7.6613 14.4895 7.64143 14.4895 7.63533C14.4896 7.63186 14.4896 7.62618 14.4896 7.62395C14.4896 7.6224 14.4896 7.6197 14.4896 7.61856C14.4896 7.61617 14.4895 7.61428 14.4895 7.61333C14.4895 7.61224 14.4895 7.61134 14.4895 7.61075C14.4895 7.60958 14.4895 7.60864 14.4895 7.60813C14.4895 7.60708 14.4895 7.6062 14.4894 7.60574C14.4894 7.60404 14.4894 7.602 14.4894 7.60045C14.4893 7.59865 14.4893 7.59651 14.4893 7.5942C14.4892 7.58956 14.4891 7.58392 14.489 7.57833C14.4889 7.57274 14.4888 7.5671 14.4887 7.56246C14.4887 7.56014 14.4886 7.558 14.4886 7.5562C14.4886 7.55466 14.4885 7.55262 14.4885 7.55091C14.4885 7.55046 14.4885 7.54958 14.4885 7.54853C14.4885 7.54802 14.4884 7.54708 14.4884 7.54591C14.4884 7.54531 14.4884 7.54442 14.4883 7.54333C14.4883 7.54239 14.4883 7.5405 14.4882 7.53811C14.4882 7.53697 14.4881 7.53429 14.488 7.53274C14.488 7.53053 14.4877 7.52487 14.4876 7.52143C14.4873 7.51537 14.4862 7.4957 14.4853 7.4821C14.4795 7.42484 13.3188 6.37367 12.1182 7.30885C12.1 7.40944 12.0896 7.52841 12.089 7.5456C12.0889 7.55264 12.0888 7.56354 12.0887 7.56739C12.0887 7.56981 12.0887 7.57389 12.0887 7.57556C12.0887 7.57677 12.0887 7.57891 12.0887 7.57984C12.0888 7.58328 12.0888 7.586 12.0888 7.58659C12.0888 7.58767 12.0888 7.58854 12.0888 7.58903C12.0888 7.59072 12.0889 7.59229 12.0889 7.59291C12.0889 7.59383 12.0889 7.59485 12.0889 7.59593C12.089 7.60014 12.0891 7.60736 12.0893 7.61836L14.489 7.579C14.4888 7.56801 14.4887 7.56149 14.4886 7.55815C14.4886 7.55733 14.4886 7.55685 14.4886 7.55662C14.4886 7.5561 14.4886 7.55687 14.4886 7.55809C14.4886 7.55846 14.4886 7.55924 14.4887 7.56023C14.4887 7.56075 14.4887 7.5634 14.4887 7.56681C14.4887 7.56773 14.4887 7.56986 14.4887 7.57106C14.4887 7.57273 14.4887 7.5768 14.4887 7.57921C14.4887 7.58306 14.4885 7.59395 14.4884 7.60099C14.4879 7.61818 14.4775 7.73715 14.4592 7.83774C13.2586 8.77292 12.0979 7.72175 12.0922 7.66449C12.0912 7.65089 12.0901 7.63123 12.0898 7.62517C12.0897 7.62173 12.0895 7.61608 12.0894 7.61388C12.0894 7.61233 12.0893 7.60965 12.0892 7.60852C12.0892 7.60616 12.0891 7.60429 12.0891 7.60337C12.0891 7.60231 12.0891 7.60145 12.089 7.60089C12.089 7.59979 12.089 7.59894 12.089 7.59853C12.089 7.59769 12.089 7.59709 12.089 7.59698C12.089 7.59665 12.089 7.59702 12.089 7.59865C12.089 7.60003 12.089 7.60184 12.0891 7.60399C12.0892 7.60828 12.0892 7.61363 12.0893 7.61903C12.0894 7.62443 12.0895 7.62979 12.0896 7.63408C12.0896 7.63623 12.0897 7.63804 12.0897 7.63942C12.0897 7.64105 12.0897 7.64141 12.0897 7.64108C12.0897 7.64097 12.0897 7.64037 12.0897 7.63953C12.0897 7.63913 12.0897 7.63827 12.0897 7.63717C12.0896 7.63661 12.0896 7.63575 12.0896 7.63469C12.0896 7.63376 12.0896 7.63189 12.0896 7.62952C12.0896 7.62838 12.0896 7.6257 12.0896 7.62415C12.0896 7.62193 12.0896 7.61625 12.0896 7.61279C12.0897 7.60669 12.0902 7.58682 12.0907 7.57306C12.0946 7.51435 13.2237 6.42587 14.4522 7.32674C14.4727 7.42367 14.4866 7.53892 14.4876 7.55589C14.488 7.56288 14.4885 7.57368 14.4887 7.57751C14.4888 7.57991 14.4889 7.58397 14.489 7.58562C14.489 7.58682 14.4891 7.58895 14.4891 7.58986C14.4892 7.59326 14.4893 7.59591 14.4893 7.59642C14.4893 7.59742 14.4893 7.59819 14.4893 7.59857C14.4893 7.59978 14.4894 7.60056 14.4893 7.60003C14.4893 7.5998 14.4893 7.59932 14.4893 7.5985C14.4893 7.59516 14.4891 7.58864 14.4889 7.57765L12.0893 7.6197ZM12.0742 5.97087C12.0687 6.44222 12.0815 7.17648 12.0893 7.6197L14.4889 7.57766C14.4809 7.12073 14.469 6.4272 14.474 5.9991L12.0742 5.97087ZM14.8093 8.28603C14.8498 7.90325 14.8596 7.42285 14.8004 6.93141C14.7427 6.4526 14.6093 5.87614 14.3022 5.366L12.2461 6.60397C12.3115 6.71258 12.3814 6.91764 12.4177 7.21859C12.4524 7.50691 12.4469 7.80451 12.4226 8.03347L14.8093 8.28603ZM13.5162 8.03313C13.5345 7.86024 13.6314 7.69614 13.7672 7.59189C13.8835 7.50269 14.0037 7.47347 14.1044 7.47316C14.1998 7.47287 14.3809 7.5004 14.5557 7.6603C14.7667 7.85334 14.8279 8.11177 14.8092 8.28692L12.4227 8.03258C12.3674 8.5517 12.5379 9.06725 12.9358 9.43122C13.2975 9.76203 13.7429 9.87429 14.1119 9.87315C14.8194 9.87096 15.7848 9.39804 15.9028 8.28637L13.5162 8.03313ZM12.2671 5.49507C12.7045 5.52542 13.0076 5.75091 13.2362 6.21014C13.4857 6.71139 13.5828 7.40462 13.5162 8.03323L15.9028 8.28628C16.0067 7.30636 15.8797 6.13499 15.3847 5.14061C14.8688 4.10422 13.9069 3.20307 12.4332 3.10082L12.2671 5.49507ZM11.5278 5.508L12.3647 5.49786L12.3356 3.09803L11.4987 3.10817L11.5278 5.508ZM10.4635 8.03389C10.3984 7.41947 10.4897 6.74027 10.7293 6.23988C10.9528 5.77307 11.2493 5.54637 11.6504 5.50022L11.3761 3.11595C9.95812 3.27909 9.04961 4.19047 8.56461 5.20343C8.09569 6.1828 7.97497 7.32505 8.07681 8.28665L10.4635 8.03389ZM9.17033 8.28735C9.15174 8.11282 9.21257 7.85457 9.42359 7.6614C9.59848 7.5013 9.77974 7.47367 9.8754 7.47398C9.97643 7.4743 10.0966 7.50363 10.2127 7.59279C10.3484 7.69696 10.445 7.86078 10.4634 8.03325L8.07688 8.28729C8.19512 9.39809 9.15948 9.87169 9.8677 9.87396C10.2368 9.87515 10.6824 9.76277 11.0441 9.43167C11.442 9.06748 11.6121 8.55195 11.5568 8.0332L9.17033 8.28735ZM9.53209 5.64185C9.18093 6.48544 9.05722 7.40637 9.1733 8.31272L11.5539 8.00783C11.4911 7.51793 11.558 7.02015 11.7478 6.56418L9.53209 5.64185ZM11.8399 7.69178V6.10302H9.43994V7.69178H11.8399ZM11.1295 11.7074L11.8206 7.90644L9.4593 7.47712L8.76821 11.2781L11.1295 11.7074ZM10.2046 10.5993C10.7911 10.5993 11.2344 11.1304 11.1295 11.7074L8.76821 11.2781C8.60526 12.1743 9.29375 12.9993 10.2046 12.9993V10.5993ZM10.6196 10.5993H10.2046V12.9993H10.6196V10.5993ZM11.7609 13.8575C11.7896 13.1763 11.8078 12.4969 11.8195 11.8199L9.41981 11.7786C9.40844 12.4403 9.39069 13.0994 9.36306 13.7567L11.7609 13.8575ZM10.6133 13.7569C10.6195 13.6073 10.6985 13.4362 10.8406 13.3206C10.9591 13.2241 11.0773 13.1998 11.1608 13.1997C11.2422 13.1996 11.3851 13.2234 11.5279 13.348C11.7006 13.4988 11.7673 13.7071 11.7609 13.8575L9.36306 13.7567C9.34009 14.303 9.55062 14.8078 9.94946 15.156C10.3184 15.4781 10.7697 15.6002 11.1637 15.5997C11.9303 15.5987 12.9605 15.0667 13.0112 13.8573L10.6133 13.7569ZM10.671 11.7784C10.6595 12.44 10.6415 13.0989 10.6133 13.7558L13.0111 13.8585C13.0403 13.1771 13.0588 12.4974 13.0706 11.8202L10.671 11.7784ZM12.0869 10.5993H11.8708V12.9993H12.0869V10.5993ZM11.9991 2.57165C11.9991 2.5772 11.9974 2.58267 11.9943 2.58735L9.99877 1.25398C9.73813 1.64404 9.59907 2.1026 9.59907 2.57165H11.9991ZM11.9969 2.56084C11.9984 2.56434 11.9991 2.56802 11.9991 2.57165H9.59907C9.59907 2.88303 9.66037 3.19145 9.77959 3.47928L11.9969 2.56084ZM11.9908 2.55168C11.9934 2.55425 11.9955 2.55735 11.9969 2.56084L9.77959 3.47928C9.89881 3.7671 10.0735 4.02854 10.2937 4.24873L11.9908 2.55168ZM11.9816 2.54555C11.9851 2.54697 11.9882 2.54906 11.9908 2.55168L10.2937 4.24873C10.514 4.46896 10.7754 4.64367 11.0632 4.76286L11.9816 2.54555ZM11.9708 2.5434C11.9745 2.5434 11.9782 2.54412 11.9816 2.54555L11.0632 4.76286C11.351 4.88206 11.6594 4.9434 11.9708 4.9434V2.5434ZM11.9551 2.54816C11.9598 2.54507 11.9652 2.5434 11.9708 2.5434V4.9434C12.4399 4.9434 12.8985 4.80429 13.2885 4.54369L11.9551 2.54816ZM11.9447 2.56084C11.9468 2.55572 11.9505 2.55129 11.9551 2.54816L13.2885 4.54369C13.6786 4.28306 13.9825 3.91263 14.162 3.47928L11.9447 2.56084ZM11.9431 2.57716C11.942 2.57157 11.9426 2.5659 11.9447 2.56084L14.162 3.47928C14.3415 3.046 14.3886 2.56913 14.297 2.10894L11.9431 2.57716ZM11.9509 2.59163C11.9469 2.58764 11.9442 2.58259 11.9431 2.57716L14.297 2.10895C14.2055 1.64892 13.9797 1.22631 13.6479 0.894573L11.9509 2.59163ZM11.9653 2.59936C11.9599 2.59829 11.9549 2.59564 11.9509 2.59163L13.6479 0.894574C13.3162 0.562818 12.8935 0.336973 12.4335 0.245476L11.9653 2.59936ZM11.9816 2.59775C11.9765 2.59989 11.9708 2.60045 11.9653 2.59936L12.4335 0.245476C11.9734 0.153962 11.4966 0.200928 11.0632 0.38044L11.9816 2.59775ZM11.9943 2.58735C11.9912 2.592 11.9868 2.59562 11.9816 2.59775L11.0632 0.380441C10.6298 0.559947 10.2594 0.863935 9.99877 1.25398L11.9943 2.58735Z"
        fill={colorStyle}
        mask="url(#path-2-outside-1_4101_1084)"
      />
    </svg>
  );
};

export default GenderBoth;
