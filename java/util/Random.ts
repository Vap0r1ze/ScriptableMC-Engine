declare var Java: any;
import Class from '../../java/lang/Class.js'
import DoubleStream from './stream/DoubleStream.js'
import IntStream from './stream/IntStream.js'
import LongStream from './stream/LongStream.js'
import Object from '../../java/lang/Object.js'
import Serializable from '../../java/io/Serializable.js'
import String from '../../java/lang/String.js'

export default interface Random extends Object, Serializable {
	doubles(): DoubleStream;
	doubles(arg0: number): DoubleStream;
	doubles(arg0: number, arg1: number): DoubleStream;
	doubles(arg0: number, arg1: number, arg2: number): DoubleStream;
	ints(): IntStream;
	ints(arg0: number): IntStream;
	ints(arg0: number, arg1: number): IntStream;
	ints(arg0: number, arg1: number, arg2: number): IntStream;
	longs(): LongStream;
	longs(arg0: number): LongStream;
	longs(arg0: number, arg1: number): LongStream;
	longs(arg0: number, arg1: number, arg2: number): LongStream;
	nextBoolean(): boolean;
	nextBytes(arg0: Array<number>): void;
	nextDouble(): number;
	nextFloat(): number;
	nextGaussian(): number;
	nextInt(): number;
	nextInt(arg0: number): number;
	nextLong(): number;
	setSeed(arg0: number): void;
}

export default class Random {
	public static get $javaClass(): any {
		return Java.type('java.util.Random');
	}
	public static $isInstance(obj: any): obj is Random {
		return obj instanceof Random.$javaClass;
	}

	constructor();
	constructor(arg0: number);
	constructor(...args: any[]) {
		return new Random.$javaClass(...args);
	}

}

