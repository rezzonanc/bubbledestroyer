const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Tween,
		C3.Plugins.Touch,
		C3.Plugins.Text,
		C3.Behaviors.Anchor,
		C3.Plugins.TiledBg,
		C3.Behaviors.Rotate,
		C3.Plugins.LocalStorage,
		C3.Plugins.Particles,
		C3.Behaviors.scrollto,
		C3.Plugins.Audio,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Audio.Acts.SetPlaybackRate,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.int,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Exps.viewportleft,
		C3.Plugins.System.Exps.viewportright,
		C3.Plugins.System.Exps.viewporttop,
		C3.Plugins.System.Exps.viewportbottom,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.Sprite.Acts.SetDefaultColor,
		C3.Plugins.System.Exps.rgba255,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Touch.Exps.X,
		C3.Plugins.Touch.Exps.Y,
		C3.Plugins.Text.Acts.SetFontColor,
		C3.Plugins.Sprite.Exps.ColorValue,
		C3.Plugins.TiledBg.Acts.SetDefaultColor,
		C3.Plugins.Particles.Acts.SetDefaultColor,
		C3.Behaviors.scrollto.Acts.Shake,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.LocalStorage.Acts.SetItem,
		C3.Plugins.Text.Cnds.OnCreated,
		C3.Plugins.Text.Acts.SetOpacity,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.Text.Exps.Y,
		C3.Plugins.Touch.Cnds.OnTouchStart,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Behaviors.Tween.Cnds.OnTweensFinished,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Text.Cnds.CompareInstanceVar,
		C3.Plugins.Text.Acts.SetInstanceVar,
		C3.Plugins.Text.Exps.X,
		C3.Plugins.LocalStorage.Acts.CheckItemExists,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.System.Cnds.ForEach,
		C3.Behaviors.Tween.Acts.TweenValue,
		C3.Plugins.System.Exps.choose,
		C3.Plugins.LocalStorage.Cnds.OnItemExists,
		C3.Plugins.LocalStorage.Acts.GetItem,
		C3.Plugins.LocalStorage.Cnds.OnItemGet,
		C3.Plugins.LocalStorage.Exps.ItemValue,
		C3.Behaviors.Tween.Cnds.IsPlaying,
		C3.Plugins.Text.Acts.SetFontSize,
		C3.Behaviors.Tween.Exps.Value
	];
};
self.C3_JsPropNameTable = [
	{Tween: 0},
	{bubble: 0},
	{Touch: 0},
	{Anchor: 0},
	{counter: 0},
	{addtext: 0},
	{Rotate: 0},
	{TiledBackground: 0},
	{id: 0},
	{startx: 0},
	{starty: 0},
	{menubtns: 0},
	{lives: 0},
	{LocalStorage: 0},
	{scoreText: 0},
	{Particles: 0},
	{ScrollTo: 0},
	{cam: 0},
	{Audio: 0},
	{author: 0},
	{duration: 0},
	{timer: 0},
	{size: 0},
	{score: 0},
	{bestScore: 0},
	{addScore: 0},
	{mode: 0}
];

self.InstanceType = {
	bubble: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	counter: class extends self.ITextInstance {},
	addtext: class extends self.ITextInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	menubtns: class extends self.ITextInstance {},
	lives: class extends self.ISpriteInstance {},
	LocalStorage: class extends self.IInstance {},
	scoreText: class extends self.ITextInstance {},
	Particles: class extends self.IParticlesInstance {},
	cam: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	author: class extends self.ITextInstance {}
}