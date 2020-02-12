import { SanitizerBlacklistComponent } from "src/assets/examples/sanitizers/sanitizer/blacklist/sanitizer-blacklist.component";
import { SanitizerEscapeComponent } from "src/assets/examples/sanitizers/sanitizer/escape/sanitizer-escape.component";
import { SanitizerLtrimComponent } from "src/assets/examples/sanitizers/sanitizer/ltrim/sanitizer-ltrim.component";
import { SanitizerRtrimComponent } from "src/assets/examples/sanitizers/sanitizer/rtrim/sanitizer-rtrim.component";
import { SanitizerSuffixComponent } from "src/assets/examples/sanitizers/sanitizer/suffix/sanitizer-suffix.component";
import { SanitizerTrimComponent } from "src/assets/examples/sanitizers/sanitizer/trim/sanitizer-trim.component";
import { SanitizerPrefixComponent } from "src/assets/examples/sanitizers/sanitizer/prefix/sanitizer-prefix.component";
import { SanitizerToBooleanComponent } from "src/assets/examples/sanitizers/sanitizer/toBoolean/sanitizer-to-boolean.component";
import { SanitizerToFloatComponent } from "src/assets/examples/sanitizers/sanitizer/toFloat/sanitizer-to-float.component";
import { SanitizerToIntComponent } from "src/assets/examples/sanitizers/sanitizer/toInt/sanitizer-to-int.component";
import { SanitizerWhitelistComponent } from "src/assets/examples/sanitizers/sanitizer/whitelist/sanitizer-whitelist.component";
import { SanitizerToStringComponent } from "src/assets/examples/sanitizers/sanitizer/toString/sanitizer-to-string.component";
import { SanitizerToDoubleComponent } from "src/assets/examples/sanitizers/sanitizer/toDouble/sanitizer-to-double.component";
import { SanitizerLowercaseComponent } from "src/assets/examples/sanitizers/sanitizer/lowercase/sanitizer-lowercase.component";
import { SanitizerUppercaseComponent } from "src/assets/examples/sanitizers/sanitizer/uppercase/sanitizer-uppercase.component";


export const SANITIZER_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	validators:{
				blacklist:SanitizerBlacklistComponent,
				escape:SanitizerEscapeComponent,
				ltrim:SanitizerLtrimComponent,
				rtrim:SanitizerRtrimComponent,
				suffix:SanitizerSuffixComponent,
				trim:SanitizerTrimComponent,
				prefix:SanitizerPrefixComponent,
				toBoolean:SanitizerToBooleanComponent,
				toFloat:SanitizerToFloatComponent,
				toDouble:SanitizerToDoubleComponent,
				toInt:SanitizerToIntComponent,
				whitelist:SanitizerWhitelistComponent,
				toString:SanitizerToStringComponent,
				lowercase:SanitizerLowercaseComponent,
				uppercase:SanitizerUppercaseComponent,	
				
			  },
}