import { Injectable } from '@angular/core';

@Injectable()
export class ClbService {

  constructor() { }
  
  getIELTSSectionName(){
    return ['Listening','Reading','Writing','Speaking'];
  }
  getIELTSRatings(){
    return ['9.0','8.5','8.0','7.5','7.0','6.5','6.0','5.5','5.0','4.5','4.0','3.5'];
  }

  calculateCLB(iel_listening,iel_reading,iel_writing,iel_speaking)
  {
			var iel_final = "";

			if (iel_listening == "" || iel_reading == "" || iel_speaking == "" || iel_writing == "" ) {
				iel_final = "You must enter all Four values.";
			} else if (iel_listening <= "4.0" || iel_reading <= "3.0" || iel_speaking <= "3.5" || iel_writing <= "3.5" ) {
				iel_final = "Your CLB is 3 or less.";
			} else if (iel_listening <= "4.5" || iel_reading <= "3.5" || iel_speaking <= "4.5" || iel_writing <= "4.5" ) {
				iel_final = "Your CLB is: 4";
			} else if (iel_listening <= "5.0" || iel_reading <= "4.5" || iel_speaking <= "5.0" || iel_writing <= "5.0" ) {
				iel_final = "Your CLB is: 5";
			} else if (iel_listening <= "5.5" || iel_reading <= "5.5" || iel_speaking <= "5.5" || iel_writing <= "5.5" ) {
				iel_final = "Your CLB is: 6";
			} else if (iel_listening <= "7.0" || iel_reading <= "6.0" || iel_speaking <= "6.0" || iel_writing <= "6.0" ) {
				iel_final = "Your CLB is: 7";
			} else if (iel_listening <= "7.5" || iel_reading <= "6.5" || iel_speaking <= "6.5" || iel_writing <= "6.5" ) {
				iel_final = "Your CLB is: 8";
			} else if (iel_listening <= "9.0" || iel_reading <= "9.0" || iel_speaking <= "9.0" || iel_writing <= "9.0" ) {
				iel_final = "Your CLB is: 9";
			}
			
		return iel_final;

  }
}
