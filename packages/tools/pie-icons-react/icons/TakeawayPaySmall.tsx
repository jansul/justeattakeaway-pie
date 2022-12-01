import * as React from "react";
import { SVGProps } from "react";

const TakeawayPaySmall = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" className="c-pieIcon c-pieIcon--takeawayPaySmall" width="1em" height="1em" role="img" {...props}><path d="M7.4025 5.79687H6.92563V6.64125H7.4025C7.46739 6.65888 7.53546 6.66132 7.60145 6.64838C7.66743 6.63544 7.72954 6.60746 7.78295 6.56663C7.83637 6.52579 7.87965 6.47319 7.90945 6.41291C7.93924 6.35263 7.95474 6.2863 7.95474 6.21906C7.95474 6.15182 7.93924 6.08549 7.90945 6.02521C7.87965 5.96493 7.83637 5.91233 7.78295 5.8715C7.72954 5.83066 7.66743 5.80268 7.60145 5.78974C7.53546 5.7768 7.46739 5.77924 7.4025 5.79687Z" /><path d="M9.24437 7.46813C9.24437 7.63 9.39312 7.71313 9.58125 7.71313C9.64426 7.72039 9.70808 7.71464 9.76878 7.69626C9.82948 7.67787 9.88577 7.64722 9.93415 7.60622C9.98254 7.56521 10.022 7.51472 10.0501 7.45785C10.0782 7.40099 10.0943 7.33897 10.0975 7.27563V7.18375L9.625 7.22313C9.38 7.23625 9.24437 7.31938 9.24437 7.46813Z" /><path d="M13.125 2.1875H0.875C0.649599 2.18727 0.432805 2.27404 0.269797 2.42971C0.106789 2.58538 0.0101429 2.79795 0 3.02313V10.9769C0.0101429 11.202 0.106789 11.4146 0.269797 11.5703C0.432805 11.726 0.649599 11.8127 0.875 11.8125H13.125C13.3504 11.8127 13.5672 11.726 13.7302 11.5703C13.8932 11.4146 13.9899 11.202 14 10.9769V3.02313C13.9899 2.79795 13.8932 2.58538 13.7302 2.42971C13.5672 2.27404 13.3504 2.18727 13.125 2.1875ZM5.1625 6.65L4.83437 6.71125C4.81278 6.71769 4.79348 6.73018 4.77875 6.74723C4.76403 6.76429 4.75448 6.7852 4.75125 6.8075C4.75125 6.86438 4.69 8.15938 4.61125 8.49625C4.60342 8.51945 4.58881 8.53977 4.56931 8.55459C4.54982 8.5694 4.52633 8.57804 4.50187 8.57938H2.06938C2.04475 8.57865 2.02097 8.57025 2.00136 8.55535C1.98175 8.54044 1.96729 8.51978 1.96 8.49625C1.88517 7.93602 1.83844 7.3724 1.82 6.8075C1.81649 6.78826 1.80825 6.77019 1.79604 6.75492C1.78382 6.73965 1.768 6.72765 1.75 6.72L1.42188 6.65875C1.39551 6.65724 1.37041 6.64694 1.35058 6.6295C1.33076 6.61205 1.31735 6.58846 1.3125 6.5625C1.31003 6.54655 1.31003 6.53032 1.3125 6.51438C1.74865 5.7412 2.36562 5.08519 3.11063 4.6025C3.15883 4.57124 3.21505 4.55461 3.2725 4.55461C3.32995 4.55461 3.38617 4.57124 3.43438 4.6025C3.68468 4.7945 3.91482 5.01145 4.12125 5.25V4.84313C4.12125 4.82456 4.12862 4.80676 4.14175 4.79363C4.15488 4.7805 4.17268 4.77313 4.19125 4.77313L4.52813 4.8125C4.55197 4.81464 4.57454 4.82425 4.5926 4.83996C4.61067 4.85567 4.62332 4.87668 4.62875 4.9C4.62875 4.9 4.68563 5.30688 4.725 5.7225C4.72061 5.73375 4.72061 5.74625 4.725 5.7575C4.92428 5.98579 5.10016 6.23349 5.25 6.49688C5.25116 6.50997 5.25116 6.52315 5.25 6.53625C5.24993 6.56219 5.24132 6.58738 5.2255 6.60794C5.20969 6.62849 5.18755 6.64328 5.1625 6.65ZM7.4375 7.14437H6.92562V8.0675H6.33938V5.29375H7.4375C7.56436 5.28502 7.69167 5.30247 7.8115 5.34502C7.93134 5.38757 8.04114 5.45431 8.1341 5.54109C8.22705 5.62786 8.30117 5.73283 8.35184 5.84946C8.40251 5.96609 8.42866 6.0919 8.42866 6.21906C8.42866 6.34623 8.40251 6.47203 8.35184 6.58866C8.30117 6.7053 8.22705 6.81026 8.1341 6.89704C8.04114 6.98382 7.93134 7.05055 7.8115 7.0931C7.69167 7.13565 7.56436 7.1531 7.4375 7.14437ZM10.6312 8.0675H10.1281V7.84C10.0503 7.93347 9.95146 8.00717 9.83968 8.05508C9.72789 8.10299 9.60635 8.12374 9.485 8.11562C9.02563 8.11562 8.6975 7.87937 8.6975 7.47688C8.6975 7.07438 8.98625 6.86875 9.5725 6.83813L10.1237 6.81187V6.77688C10.1237 6.51875 9.93563 6.39625 9.68625 6.39625C9.59613 6.38782 9.50524 6.39824 9.41937 6.42687C9.3335 6.45549 9.25454 6.50168 9.1875 6.5625L8.84625 6.23438C8.95852 6.1173 9.09497 6.02612 9.24609 5.96719C9.39721 5.90825 9.55936 5.88298 9.72125 5.89313C9.84051 5.87673 9.9619 5.88629 10.0771 5.92115C10.1923 5.95602 10.2987 6.01537 10.3888 6.09513C10.479 6.1749 10.5508 6.27321 10.5995 6.38332C10.6481 6.49344 10.6724 6.61276 10.6706 6.73313L10.6312 8.0675ZM12.3331 8.0675C12.1144 8.60563 11.9175 8.89 11.3837 8.89C11.3042 8.89066 11.2249 8.88184 11.1475 8.86375V8.37375C11.2076 8.3888 11.2693 8.39615 11.3313 8.39563C11.5631 8.39563 11.6419 8.30812 11.7469 8.08062L10.9375 5.95875H11.5412L12.0838 7.4025L12.6263 5.95875H13.2125L12.3331 8.0675Z" /></svg>;

export default TakeawayPaySmall;