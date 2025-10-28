using System;

public class Retangle
{
    public double Height { get; set; }
    public double Width { get; set; }

    public Retangle(double height, double width)
    {
        Height = height;
        Width = width;
    }

    public double CalculatePerimeter()
    {
        return 2 * (Height + Width);
    }
}


Retangle retangle = new Retangle(5.5, 20);
Console.WriteLine($"Perímetro: {Math.Round(retangle.CalculatePerimeter(),2)}");
  