$(".counter-value").each(function() {
	$(this)
	  .prop("Counter", 0)
	  .animate(
		{
		  Counter: $(this).data("count")
		},
		{
		  duration: 3000,
		  easing: "swing",
		  step: function(now) {
			$(this).text(this.Counter.toFixed());
		  }
		}
	  );
  });
  