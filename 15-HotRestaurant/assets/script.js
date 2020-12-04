$(".submit").on("click", function (event) {
    event.preventDefault();

    const newReservation = {
        name: $("#reserve-name").val().trim(),
        phone: $("#reserve-phone").val().trim(),
        email: $("#reserve-email").val().trim(),
        uniqueId: $("#reserve-unique-id").val().trim()
    }
    console.log(newReservation)

    app.post("/api/tables", newReservation, function (req, res) {
        let newReservation = req.body;
        if (reservations.length < 5) {
          reservations.push(newReservation);
          return res.json(reservations);
        } else {
          waitingList.push(newReservation);
          return res.json(waitingList);
        }
      });
})



