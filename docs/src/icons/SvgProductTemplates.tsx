import * as React from 'react';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <circle cx={18} cy={18} r={16} fill="#EAEEF3" />
      <mask
        id="product-templates-mask1"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x={12}
        y={5}
        width={17}
        height={17}
      >
        <path
          d="M12.69 11.039c0-1.047.564-2.012 1.476-2.525L18.994 5.8a2.897 2.897 0 012.84 0l4.827 2.715a2.897 2.897 0 011.477 2.525v5.301a2.896 2.896 0 01-1.477 2.525l-4.827 2.716a2.897 2.897 0 01-2.84 0l-4.828-2.716a2.897 2.897 0 01-1.476-2.524v-5.302z"
          fill="#ED64A6"
        />
      </mask>
      <g mask="url(#product-templates-mask1)" fillRule="evenodd" clipRule="evenodd">
        <path d="M12.69 9.345l7.724 4.345 7.724-4.345L20.414 5l-7.725 4.345z" fill="#C2E0FF" />
        <path d="M20.414 13.69v8.69l7.724-4.346v-8.69l-7.724 4.346z" fill="#39F" />
        <path d="M12.69 18.034l7.724 4.345v-8.69l-7.725-4.344v8.69z" fill="#007FFF" />
      </g>
      <mask
        id="product-templates-mask2"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x={4}
        y={10}
        width={16}
        height={17}
      >
        <path
          d="M4 15.867c0-1.047.564-2.012 1.476-2.525l4.828-2.716a2.896 2.896 0 012.84 0l4.828 2.716a2.897 2.897 0 011.476 2.524v5.302a2.897 2.897 0 01-1.476 2.525l-4.828 2.715a2.897 2.897 0 01-2.84 0l-4.828-2.715A2.897 2.897 0 014 21.168v-5.301z"
          fill="#ED64A6"
        />
      </mask>
      <g mask="url(#product-templates-mask2" fillRule="evenodd" clipRule="evenodd">
        <path d="M4 14.172l7.724 4.345 7.724-4.345-7.724-4.344L4 14.173z" fill="#C2E0FF" />
        <path d="M11.724 18.517v8.69l7.724-4.345v-8.69l-7.724 4.345z" fill="#39F" />
        <path d="M4 22.862l7.724 4.345v-8.69L4 14.172v8.69z" fill="#66B2FF" />
      </g>
      <mask
        id="product-templates-mask3"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x={16}
        y={13}
        width={16}
        height={17}
      >
        <path
          d="M16.552 18.763c0-1.047.564-2.012 1.476-2.525l4.828-2.715a2.897 2.897 0 012.84 0l4.827 2.715A2.897 2.897 0 0132 18.763v5.302a2.896 2.896 0 01-1.477 2.524l-4.827 2.716a2.897 2.897 0 01-2.84 0l-4.828-2.716a2.897 2.897 0 01-1.476-2.524v-5.302z"
          fill="#ED64A6"
        />
      </mask>
      <g mask="url(#product-templates-mask3)" fillRule="evenodd" clipRule="evenodd">
        <path d="M16.552 17.069l7.724 4.345L32 17.069l-7.724-4.345-7.724 4.345z" fill="#C2E0FF" />
        <path d="M24.276 21.414v8.69L32 25.758v-8.69l-7.724 4.345z" fill="#39F" />
        <path d="M16.552 25.759l7.724 4.344v-8.69l-7.724-4.344v8.69z" fill="#66B2FF" />
      </g>
    </svg>
  );
}

export default SvgComponent;
