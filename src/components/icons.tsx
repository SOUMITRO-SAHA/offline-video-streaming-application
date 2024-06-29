import { cn } from "@/lib/utils";

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  google: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  apple: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
        fill="currentColor"
      />
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  caption: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g
          id="🔍-Product-Icons"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          {" "}
          <g
            id="ic_fluent_closed_caption_24_filled"
            fill={"#fff"}
            fill-rule="nonzero"
          >
            {" "}
            <path
              d="M18.75,4 C20.5449254,4 22,5.45507456 22,7.25 L22,16.754591 C22,18.5495164 20.5449254,20.004591 18.75,20.004591 L5.25,20.004591 C3.45507456,20.004591 2,18.5495164 2,16.754591 L2,7.25 C2,5.51696854 3.35645477,4.10075407 5.06557609,4.00514479 L5.25,4 L18.75,4 Z M10.6216203,8.59854135 C8.21322176,7.22468635 5.5,8.85441664 5.5,12 C5.5,15.1433285 8.21538655,16.7747125 10.6208022,15.4065583 C10.9808502,15.2017699 11.106713,14.7438795 10.9019246,14.3838314 C10.6971362,14.0237834 10.2392458,13.8979206 9.8791978,14.102709 C8.48410774,14.8962094 7,14.0045685 7,12 C7,9.9935733 8.48070939,9.10416685 9.87837972,9.90145865 C10.2381704,10.1066989 10.6962184,9.98141095 10.9014586,9.62162028 C11.1066989,9.2618296 10.981411,8.80378156 10.6216203,8.59854135 Z M18.1216203,8.59854135 C15.7132218,7.22468635 13,8.85441664 13,12 C13,15.1433285 15.7153866,16.7747125 18.1208022,15.4065583 C18.4808502,15.2017699 18.606713,14.7438795 18.4019246,14.3838314 C18.1971362,14.0237834 17.7392458,13.8979206 17.3791978,14.102709 C15.9841077,14.8962094 14.5,14.0045685 14.5,12 C14.5,9.9935733 15.9807094,9.10416685 17.3783797,9.90145865 C17.7381704,10.1066989 18.1962184,9.98141095 18.4014586,9.62162028 C18.6066989,9.2618296 18.481411,8.80378156 18.1216203,8.59854135 Z"
              id="🎨-Color"
            >
              {" "}
            </path>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  ),
};
