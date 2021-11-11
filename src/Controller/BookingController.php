<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

class BookingController extends AbstractController
{
    #[Route('/', name: 'bookings', methods:['GET'])]
    public function list(): Response
    {
        $number = random_int(0, 100);
        
        return $this->render(
            'booking/list.html.twig', [
                'number' => $number
        ]);
    }


    #[Route('/create', name: 'createBooking', methods:['GET', 'POST'])]
    public function create(): Response
    {
        $number = random_int(0, 100);
        
        return $this->render(
            'booking/create.html.twig', [
                'number' => $number
        ]);
    }
}