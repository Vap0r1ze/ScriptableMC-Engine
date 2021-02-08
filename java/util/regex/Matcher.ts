declare var Java: any;
import CharSequence from '../../../java/lang/CharSequence.js'
import Class from '../../../java/lang/Class.js'
import MatchResult from './MatchResult.js'
import Object from '../../../java/lang/Object.js'
import Pattern from './Pattern.js'
import String from '../../../java/lang/String.js'
import StringBuffer from '../../../java/lang/StringBuffer.js'

export default interface Matcher extends Object, MatchResult {
	appendReplacement(arg0: StringBuffer, arg1: string): Matcher;
	appendTail(arg0: StringBuffer): StringBuffer;
	end(): number;
	end(arg0: number): number;
	end(arg0: string): number;
	find(): boolean;
	find(arg0: number): boolean;
	group(): string;
	group(arg0: number): string;
	group(arg0: string): string;
	groupCount(): number;
	hasAnchoringBounds(): boolean;
	hasTransparentBounds(): boolean;
	hitEnd(): boolean;
	lookingAt(): boolean;
	matches(): boolean;
	pattern(): Pattern;
	region(arg0: number, arg1: number): Matcher;
	regionEnd(): number;
	regionStart(): number;
	replaceAll(arg0: string): string;
	replaceFirst(arg0: string): string;
	requireEnd(): boolean;
	reset(): Matcher;
	reset(arg0: CharSequence): Matcher;
	start(): number;
	start(arg0: string): number;
	start(arg0: number): number;
	toMatchResult(): MatchResult;
	useAnchoringBounds(arg0: boolean): Matcher;
	usePattern(arg0: Pattern): Matcher;
	useTransparentBounds(arg0: boolean): Matcher;
}

export default class Matcher {
	public static get $javaClass(): any {
		return Java.type('java.util.regex.Matcher');
	}
	public static $isInstance(obj: any): obj is Matcher {
		return obj instanceof Matcher.$javaClass;
	}

	public static quoteReplacement(arg0: string): string;
	public static quoteReplacement(...args: any[]): any {
		return Matcher.$javaClass.quoteReplacement(...args);
	}

}

