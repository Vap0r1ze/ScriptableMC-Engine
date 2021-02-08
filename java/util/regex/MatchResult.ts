declare var Java: any;
import String from '../../../java/lang/String.js'

export default interface MatchResult {
	end(): number;
	end(arg0: number): number;
	group(): string;
	group(arg0: number): string;
	groupCount(): number;
	start(): number;
	start(arg0: number): number;
}

export default class MatchResult {
	public static get $javaClass(): any {
		return Java.type('java.util.regex.MatchResult');
	}
	public static $isInstance(obj: any): obj is MatchResult {
		return obj instanceof MatchResult.$javaClass;
	}

}

